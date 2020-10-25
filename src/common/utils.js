import jwt from 'jsonwebtoken'
import { secret } from '../jwtConfig'
import { camelCase, map, mapKeys, omit } from "lodash"

export const signToken = (body) => {
  const data = omit(body, ['iat', 'exp'])
  return ({
    token: `Bearer ${jwt.sign(data, secret, { expiresIn: '30 days' })}`,
    refreshtoken: `${jwt.sign(data, secret, { expiresIn: '30 days' })}`,
  })
}

export const convertToCamelCase = (data) => mapKeys(data, (v, k) => camelCase(k))

export const convertToCamelCaseForList = (data) => map(data, e => convertToCamelCase(e))

export const makeid = (length) => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
