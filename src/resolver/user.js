import { pick } from "lodash";
import { asyncQuery } from "../mysql";

export default {
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
      const [, , ] = arg
      console.log('changePassword: ' + val)
      return `操作${val ? '成功' : '失败'}`
    }
  },
}
