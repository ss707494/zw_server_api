import { getUserCollection } from '../db/user'
import { compareSync } from 'bcrypt'
import { signToken } from '../common/utils'

export const login = async (req, res, next) => {
  const userCol = getUserCollection()
  const user = await userCol.findOne({name: req.body.name}) || {}
  const result = user.password && compareSync(req.body.password, user.password)
  if (result) {
    const {token, refreshToken} = signToken(req.body)
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
