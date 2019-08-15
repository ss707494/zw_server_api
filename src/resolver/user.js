import { compareSync, genSaltSync, hashSync } from 'bcrypt'

export default {
  Mutation: {
    changePassword: async (...arg) => {
      const [, { data }, { db }] = arg
      console.log('changePassword: ' + val)
      return `操作${val ? '成功' : '失败'}`
    }
  },
}
