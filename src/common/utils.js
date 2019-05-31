import jwt from 'jsonwebtoken'
import { secret } from '../jwtConfig'

export const signToken = (body) => {
  const { iat, exp, ...data } = body
  return ({
    token: `Bearer ${jwt.sign(data, secret, { expiresIn: '20s' })}`,
    refreshToken: `${jwt.sign(data, secret, { expiresIn: '30 days' })}`
  });
}
