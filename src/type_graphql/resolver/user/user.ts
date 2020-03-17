import {Arg, Ctx, Field, ObjectType, Query, Resolver} from "type-graphql"
import {getRepository, Like} from "typeorm"
import {Context} from "../../apploServer"
import {User} from "../../../entity/User"
import {UserListInput} from "../../types/input"
import {PageResult} from "../../types/types"

@ObjectType()
export class UserPage extends PageResult<User> {
  @Field(returns => [User])
  list: User[]
}

@Resolver()
export class UserResolve {

  @Query(returns => UserPage)
  async userList(@Ctx() content: Context, @Arg('userListInput')userListInput: UserListInput) {
    const res = await getRepository(User)
        .findAndCount({
          relations: {
            userInfo: true,
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
    return PageResult.setData<User>(res)
  }

}
