import jwt from 'jsonwebtoken'
import { secret } from '../jwtConfig'
import { compareSync, genSaltSync, hashSync } from 'bcrypt'
import { signToken } from '../common/utils'
import { asyncQuery } from "../mysql"
import { catchErr } from "../common/error"
import { UnauthorizedError } from "../common/tokenHandle"
import { getRepository } from 'typeorm'
import { User } from '../entity/User'
import { plainToClass } from 'class-transformer'
import { UserInfo } from '../entity/UserInfo'

export const dealLogin = (app) => {
  app.use('/api/login', catchErr(login))
  app.use('/api/registerUser', catchErr(registerUser))
  app.use('/api/getTokenRefresh', catchErr(getTokenRefresh))
}

export const login = async (req, res) => {
  const name = req.body?.name?.replace(/\t/g, '') || ''
  const password = req.body?.password?.replace(/\t/g, '') || ''
  if (!name || !password) {
    res.json({
      code: 200,
      data: 0,
      message: '请输入用户名和密码'
    })
  }
  // language=MySQL
  const sql = `
select * from dw_server.user where name = ?
`
  const [res0] = await asyncQuery(sql, [name])
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

export const registerUser = async (req, res) => {
  const { name, password, userName, userPhone, userEmail } = req.body
  const userDatabase = await getRepository(User)
  const res2 = await userDatabase.findOne({ name })
  if (await userDatabase.findOne({ name })) {
    res.json({
      statusCode: 400,
      code: 400,
      data: 0,
      message: '用户名重复',
      statusMessage: '用户名重复',
    })
    return
  }
  const _user = plainToClass(User, {
    name,
    password: hashSync(password, genSaltSync(10)),
  })
  const _userInfo = plainToClass(UserInfo, {
    name: userName,
    phone: userPhone,
    email: userEmail,
  })
  _user.userInfo = _userInfo
  const userInfoRedult = await getRepository(UserInfo)
      .save(_userInfo)
  const userResult = await userDatabase.save(_user)
  // 兼容处理 type_graphql todo
  if (userInfoRedult.id && userResult.id) {
    await getRepository(UserInfo)
        .save({
          ..._userInfo,
          userId: userResult.id,
        })
  }
  res.json({
    statusCode: 200,
    code: 200,
    data: {
      ...userResult,
      userInfo: {
        ...userInfoRedult,
      },
    },
  })
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
