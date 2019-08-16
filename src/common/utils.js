import jwt from 'jsonwebtoken'
import { secret } from '../jwtConfig'
import { camelCase, map, mapKeys } from "lodash";

export const signToken = (body) => {
  const { iat, exp, ...data } = body
  return ({
    token: `Bearer ${jwt.sign(data, secret, { expiresIn: '12h' })}`,
    refreshtoken: `${jwt.sign(data, secret, { expiresIn: '30 days' })}`
  });
}

export const convertToCamelCase = (data) => mapKeys(data, (v, k) => camelCase(k))

export const convertToCamelCaseForList = (data) => map(data, e => convertToCamelCase(e))
