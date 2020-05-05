import {merge} from "lodash"
import {Arg, Authorized, Ctx, Field, InputType, Mutation, ObjectType, Query, Resolver} from "type-graphql"
import {getRepository, In, Like} from "typeorm"
import {User} from "../../../entity/User"
import {PageInput} from "../../types/input"
import {dealPageResult, PageResult} from "../../types/types"
import {UserInfo} from '../../../entity/UserInfo'
import {ContextType} from '../../apploServer'
import {netError} from '../../../common/error'

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

  @Authorized()
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

  @Authorized()
  @Mutation(returns => User)
  async registerUser(@Arg('data', returns => User)data: User) {
    const userDatabase = await getRepository(User)
    if (await userDatabase.find({name: data.name})) {
      throw netError()
    }
    return data
  }

}
