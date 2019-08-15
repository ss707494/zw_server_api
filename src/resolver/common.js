import { genSaltSync, hashSync } from 'bcrypt'

export default {
  Query: {
    getPassCode: async (...arg) => {
      const [, { pass }] = arg
      const hash = hashSync(pass, genSaltSync(10))
      console.log('getPassCode: ' + hash)
      return hash
    },
  }
}
