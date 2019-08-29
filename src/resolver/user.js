import { pick } from "lodash";

export default {
  Query: {
    userInfo: async (...arg) => {
      const [, , { decoded }] = arg
      if (!decoded || !decoded.id) {
        throw Error('没有用户信息')
      }
      return {
        ...pick(decoded, ['id', 'name', 'type']),
        create_time: new Date(decoded.create_time),
        update_time: new Date(decoded.update_time),
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
