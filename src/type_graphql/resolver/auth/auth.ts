import {genSaltSync, hashSync} from 'bcrypt'
import jwt from 'jsonwebtoken'
import {Arg, Field, ObjectType, Query, Resolver} from 'type-graphql'
import {secret} from '../../../jwtConfig'
import {signToken} from '../../../common/utils'
import {AuthenticationError} from 'apollo-server-express'

@ObjectType()
class AuthBody {
  @Field()
  token: string

  @Field()
  refreshtoken: string
}

@Resolver()
export class AuthResolver {

  @Query(returns => AuthBody)
  async refreshToken(@Arg('refreshtoken', {nullable: false})refreshtoken: string) {
    return await new Promise(resolve => {
      jwt.verify(refreshtoken, secret, function(err, decoded1) {
        if (err) {
          throw new AuthenticationError('refreshToken is error')
        }
        const res = signToken(decoded1)
        resolve({
          token: res.token,
          refreshtoken: res.refreshtoken,
        })
      })
    })
  }

  @Query(returns => String)
  async passwordCode(@Arg('password')password: String) {
    return hashSync(password, genSaltSync(10))
  }

}
