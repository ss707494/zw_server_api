import {merge} from "lodash"
import {Arg, Field, Float, Mutation, ObjectType, Query, Resolver} from "type-graphql"
import {getRepository, In, Like} from "typeorm"
import {User} from "../../../entity/User"
import {UserListInput} from "../../types/input"
import {dealPageResult, PageResult} from "../../types/types"
import {UserInfo} from '../../../entity/UserInfo'

@ObjectType()
export class UserPage extends PageResult<User> {
  @Field(returns => [User])
  list: User[]
}

const dealWhere = (userListInput: UserListInput) => ({
  userInfo: {
    phone: Like(`%${userListInput.phone}%`),
    email: Like(`%${userListInput.email}%`),
  },
  name: Like(`%${userListInput.name}%`),
})

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
          where: dealWhere(userListInput),
          take: userListInput.rows_per_page,
          skip: userListInput.page * userListInput.rows_per_page,
        })
    return dealPageResult(res)
  }

  @Query(returns => Float)
  async userListTotal(@Arg('userListInput')userListInput: UserListInput) {
    return (await getRepository(User)
        .findAndCount({
          where: dealWhere(userListInput),
          relations: {
            userInfo: true,
          },
        }))[1]
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

}
