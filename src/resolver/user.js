import { pick } from "lodash";
import { asyncQuery } from "../mysql";
import { dealResult } from "./common";
import { getUserById, updatePasswordDb, updateUserInfoDb } from "../db/user";
import { compareSync, genSaltSync, hashSync } from "bcrypt";
import { signToken } from "../common/utils";

export default {
  User: {
    address: async () => {
      return {}
    },
  },
  Query: {
    user_info: async (...arg) => {
      const [, , { decoded }] = arg
      if (!decoded || !decoded.id) {
        throw Error('没有用户信息')
      }
      // language=MySQL
      const getUserInfo = `
          select name as user_name, phone, email
          from dw_server.user_info
          where user_id = ?
      `
      const [res] = await asyncQuery(getUserInfo, [decoded.id])
      return {
        ...(res[0] ?? {}),
        ...pick(decoded, ['id', 'name', 'type']),
        create_time: new Date(decoded.create_time),
        update_time: new Date(decoded.update_time),
      }
    },
    user_coin: async (...arg) => {
      const [, , { decoded }] = arg
      if (!decoded || !decoded.id) {
        throw Error('没有用户信息')
      }
      return {
        current_mouth_icons: 0,
        next_mouth_icons: 0,
        card_number: 0
      }
    }

  },
  Mutation: {
    changePassword: async (...arg) => {
      const [, ,] = arg
      console.log('changePassword: ' + val)
      return `操作${val ? '成功' : '失败'}`
    },
    update_user_info: async (...arg) => {
      const [, { updateUserInfo }, { decoded: user }] = arg

      const res = await updateUserInfoDb(updateUserInfo, user?.id)

      return dealResult(res?.affectedRows ?? 0, '', {
        user: {
          id: user.id,
        }
      })
    },
    update_password: async (...arg) => {
      const [, { changePasswordInput }, { decoded: user }] = arg
      const { old_password, new_password } = changePasswordInput
      const userRes = await getUserById(user.id)

      const checkPassword = compareSync(old_password, userRes.password)
      // const res = await updateUserInfoDb(updateUserInfo, user?.id)
      if (checkPassword) {
        const hash = hashSync(new_password, genSaltSync(10))
        const res = await updatePasswordDb(hash, userRes.id)
        if (res?.affectedRows === 1) {
          const { token, refreshtoken } = signToken(userRes)
          return dealResult(res?.affectedRows ?? 0, '', {
            user: {
              id: user.id,
            },
            token: {
              token,
              refreshtoken,
            }
          })
        }
        throw '操作失败'
      } else {
        throw '密码错误'
      }
    }
  },
}
