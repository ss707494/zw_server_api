import { getImg } from '../common/drawImg'

export default {
  Query: {
    countDocuments: async (...arg) => {
      const [, param, { db }] = arg
      if (!param.name) return 0
      const count = await db.collection(param.name).countDocuments()
      return count || 0
    },
    getContentImg: async (...arg) => {
      const [, { data, option }] = arg
      const res = await getImg(data, option)
      console.log('getContentImg: ' + res)
      return res
    },
  }
}
