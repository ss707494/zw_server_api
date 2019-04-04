
export default {
  Query: {
    countDocuments: async (...arg) => {
      const [, param, { db }] = arg
      if (!param.name) return 0
      const count = await db.collection(param.name).countDocuments()
      return count || 0
    }
  }
}
