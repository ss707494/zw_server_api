import {Ctx, Query, Resolver} from "type-graphql"
import {plainToClass} from "class-transformer"
import {getRepository} from "typeorm"
import {Context} from "../../apploServer"
import {User} from "../../../entity/User"

@Resolver()
export class UserResolve {

  @Query(returns => [User])
  async userList(@Ctx() content: Context) {
    return plainToClass(User, await getRepository(User).find({relations: ['userInfo']}))
  }

}
