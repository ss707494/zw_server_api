import {merge} from "lodash"
import {Arg, Ctx, Field, Mutation, ObjectType, Query, Resolver} from "type-graphql"
import {getRepository, In, Like} from "typeorm"
import {User} from "../../../entity/User"
import {UserListInput} from "../../types/input"
import {dealPageResult, PageResult} from "../../types/types"
import {UserInfo} from '../../../entity/UserInfo'
import {Context} from '../../apploServer'

@ObjectType()
export class UserPage extends PageResult<User> {
  @Field(returns => [User])
  list: User[]
}

@Resolver()
export class UserResolve {

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
            },
            name: Like(`%${userListInput.name}%`),
          },
          take: userListInput.rows_per_page,
          skip: userListInput.page * userListInput.rows_per_page,
        })
    return dealPageResult(res)
  }

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

  @Query(returns => User)
  async userInfo(@Ctx() { user }: Context) {
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
}
