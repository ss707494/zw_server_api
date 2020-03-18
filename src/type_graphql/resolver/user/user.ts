import {Arg, Field, Float, ObjectType, Query, Resolver} from "type-graphql"
import {getRepository, Like} from "typeorm"
import {User} from "../../../entity/User"
import {UserListInput} from "../../types/input"
import {PageResult} from "../../types/types"

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
          },
          where: dealWhere(userListInput),
          take: userListInput.rows_per_page,
          skip: userListInput.page * userListInput.rows_per_page,
        })
    return PageResult.setData<User>(res)
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

}
