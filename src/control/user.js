import { getUserCollection } from '../db/user'
import { compareSync } from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import { secret } from '../jwtConfig'

export const login = async (req, res, next) => {
  const userCol = getUserCollection()
  const user = await userCol.findOne({name: req.body.name}) || {}
  const result = user.password && compareSync(req.body.password, user.password)
  if (result) {
    const token = `Bearer ${jsonwebtoken.sign(req.body, secret, { expiresIn: 60 * 60 })}`
    const refreshToken = `${jsonwebtoken.sign(req.body, secret, { expiresIn: 60 * 60 * 24 * 7 })}`
    res.json({
      code: 200,
      data: 1,
      message: 'ok',
      token,
      refreshToken,
    })
  } else {
    res.json({
      code: 200,
      data: 0,
      message: '密码错误'
    })
  }
}

export default {
  login
}
