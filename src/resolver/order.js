
export default {
  Query: {
    async order_list (...arg) {
      const [, { }, { decoded: user }] = arg

      console.log(user)
      return []
    },
  },
  Mutation: {

  },
}
