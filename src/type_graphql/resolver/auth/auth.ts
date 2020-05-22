import {genSaltSync, hashSync, compareSync} from 'bcrypt'
import jwt from 'jsonwebtoken'
import {Arg, Field, ObjectType, Query, Resolver} from 'type-graphql'
import {secret} from '../../../jwtConfig'
import {signToken} from '../../../common/utils'
import {AuthenticationError} from 'apollo-server-express'
import {User} from '../../../entity/User'
import {getRepository} from 'typeorm'

@ObjectType()
export class AuthBody {
  @Field()
  token: string

  @Field()
  refreshtoken: string
}

@Resolver()
export class AuthResolver {

  @Query(returns => AuthBody)
  async login(@Arg('user')user: User) {
    if (!user.name || !user.password) {
      throw '请输入用户名和密码'
    }
    const userRes = await getRepository(User).findOne({
      where: {
        name: user.name,
      },
    })
    if (userRes?.id && compareSync(user.password, userRes.password)) {
      const { token, refreshtoken } = signToken(userRes)
      return { token, refreshtoken }
    } else {
      throw '密码错误'
    }
  }

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
