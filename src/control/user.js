import jwt from 'jsonwebtoken'
import { secret } from '../jwtConfig'
import { compareSync } from 'bcrypt'
import { signToken } from '../common/utils'
import { asyncQuery } from "../mysql";
import { catchErr } from "../common/error";
import { UnauthorizedError } from "../common/tokenHandle";

export const dealLogin = (app) => {
  app.use('/api/login', catchErr(login))
  app.use('/api/getTokenRefresh', catchErr(getTokenRefresh))
}

export const login = async (req, res) => {
  const { name, password } = req.body
  if (!name || !password) {
    res.json({
      code: 200,
      data: 0,
      message: '请输入用户名和密码'
    })
  }
  // language=MySQL
  const sql = `
select * from dw_server.user where name = "${name}"
`
  const [res0] = await asyncQuery(sql)
  if (!res0.length) {
    res.json({
      code: 200,
      data: 0,
      message: '不存在该用户'
    })
  }
  const result = res0[0].password && compareSync(password, res0[0].password)
  if (result) {
    const { token, refreshtoken } = signToken(res0[0])
    res.json({
      code: 200,
      data: 1,
      message: 'ok',
      token,
      refreshtoken,
    })
  } else {
    res.json({
      code: 200,
      data: 0,
      message: '密码错误'
    })
  }
}

// noinspection JSUnusedLocalSymbols
export const getTokenRefresh = async (req, res, next) => {
  if (!req.body?.refreshtoken) {
    res.json({
      code: 200,
      data: 0,
      message: '请输入参数 refreshtoken'
    })
  }
  jwt.verify(req.body?.refreshtoken, secret, function(err, decoded1) {
    if (err) {
      throw (new UnauthorizedError('invalid_token', err));
    }
    const { token, refreshtoken } = signToken(decoded1)
    res.json({
      code: 200,
      data: 1,
      message: 'ok',
      token,
      refreshtoken,
    })
  })
}

export default {
  login
}
