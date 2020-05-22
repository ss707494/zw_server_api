import {merge} from "lodash"
import {Arg, Authorized, Ctx, Field, InputType, Mutation, ObjectType, Query, Resolver} from "type-graphql"
import {compareSync, genSaltSync, hashSync} from 'bcrypt'
import {getRepository, In, Like} from "typeorm"
import {User} from "../../../entity/User"
import {PageInput} from "../../types/input"
import {dealPageResult, PageResult} from "../../types/types"
import {UserInfo} from '../../../entity/UserInfo'
import {ContextType} from '../../apploServer'
import {plainToClass} from 'class-transformer'
import {signToken} from '../../../common/utils'
import {AuthBody} from '../auth/auth'

@ObjectType()
export class UserInRegister {

  @Field()
  token: string

  @Field()
  refreshtoken: string

  @Field(returns => User)
  user: User

}

@ObjectType()
export class UserPage extends PageResult<User> {
  @Field(returns => [User])
  list: User[]
}

@InputType()
export class UserListInput extends PageInput {

  @Field({nullable: true})
  name?: string = ''

  @Field({nullable: true})
  phone?: string = ''

  @Field({nullable: true})
  email?: string = ''

  @Field()
  registerName: string = ''

}

@InputType()
export class UpdatePasswordInput {

  @Field()
  oldPassword: string

  @Field()
  newPassword: string

  @Field()
  confirmPassword: string

}

@ObjectType()
class UpdatePasswordRes {
  @Field()
  authBody: AuthBody

  @Field()
  user: User
}

@Resolver()
export class UserResolve {

  @Authorized('admin')
  @Query(returns => String)
  async testLongApi() {
    const delay = (time: number) => (new Promise(resolve => setTimeout(resolve, time)))
    await delay(1000)
    return 'success111'
  }

  @Authorized()
  @Query(returns => UserPage)
  async userList(@Arg('userListInput')userListInput: UserListInput) {
    const res = await getRepository(User)
        .findAndCount({
          relations: {
            userInfo: true,
            orderInfo: true,
          },
          where: {
            userInfo: {
              phone: Like(`%${userListInput.phone}%`),
              email: Like(`%${userListInput.email}%`),
              name: Like(`%${userListInput.name}%`),
            },
            name: Like(`%${userListInput.registerName}%`),
          },
          take: userListInput.rows_per_page,
          skip: userListInput.page * userListInput.rows_per_page,
        })
    return dealPageResult(res)
  }

  @Authorized()
  @Mutation(returns => [User])
  async saveUserList(@Arg('userItemInput', returns => [User])userItemInput: [User]) {
    const database = await getRepository(User)
    const data = await database.find({
      relations: {
        userInfo: true,
      },
      where: {
        id: In(userItemInput.map(value => value.id)),
      },
    })
    const merge1 = merge(data, userItemInput)
    await getRepository(UserInfo).save(merge1.map(user => user.userInfo))
    return merge1
  }

  @Authorized('')
  @Query(returns => User)
  async oneUser(@Ctx() {user}: ContextType) {
    if (user?.id) {
      return await getRepository(User).findOne({
        where: {
          id: (user.id),
        },
        relations: {
          userInfo: true,
        },
      })
    }
    return {}
  }

  @Authorized('web_client')
  @Mutation(returns => UserInRegister)
  async registerUser(@Arg('data', returns => User)data: User) {
    if (!data?.name || !data?.password || !data?.userInfo?.email || !data?.userInfo?.phone || !data?.userInfo?.name) {
      throw '参数校验失败'
    }
    const {
      name, password, userInfo: {
        email: userEmail, phone: userPhone, name: userName,
      },
    } = data
    const userDatabase = await getRepository(User)
    const res2 = await userDatabase.findOne({name})
    if (await userDatabase.findOne({name})) {
      throw '用户名重复'
    }
    const _user = plainToClass(User, {
      name,
      password: hashSync(password, genSaltSync(10)),
    })
    const _userInfo = plainToClass(UserInfo, {
      name: userName,
      phone: userPhone,
      email: userEmail,
    })
    _user.userInfo = _userInfo
    const userInfoRedult = await getRepository(UserInfo)
        .save(_userInfo)
    const userResult = await userDatabase.save(_user)
    // 兼容处理 type_graphql todo
    if (userInfoRedult.id && userResult.id) {
      await getRepository(UserInfo)
          .save({
            ..._userInfo,
            userId: userResult.id,
          })
    }
    const {token, refreshtoken} = signToken(_user)

    return {
      token,
      refreshtoken,
      user: {
        ...userResult,
        userInfo: {
          ...userInfoRedult,
        },
      },
    }
  }

  @Authorized('')
  @Mutation(returns => UpdatePasswordRes)
  async updatePassword(@Ctx() {user}: ContextType, @Arg('data')data: UpdatePasswordInput) {
    if (user.id && compareSync(data.oldPassword, user.password) && data.newPassword) {
      const _user = await getRepository(User).save({
        id: user.id,
        password: hashSync(data.newPassword, genSaltSync(10)),
      })
      const authBody = signToken({
        ...user,
        ..._user,
      })
      return {
        authBody,
        user: _user,
      }
    }
    throw '参数校验失败'
  }

  @Authorized()
  @Mutation(returns => UserInfo)
  async updateUserInfo(@Arg('userInfo')userInfo: UserInfo) {
    return getRepository(UserInfo).save(userInfo)
  }

}
