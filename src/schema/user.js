import { objToId, idToObj } from '../common/objectId'

export default {
  Query: {
    user: async (...arg) => {
      const [, , { db }] = arg
      const res = await db.collection('user').find().toArray();
      return res.map(objToId)
    },
    oneUser: async (...arg) => {
      const [, { id }, { db }] = arg
      const res = await db.collection('user').findOne({ _id: idToObj(id)});
      return objToId(res)
    },
    allUser: async (...arg) => {
      const [, , { db }] = arg
      const res = await db.collection('user').find().toArray();
      return res.map(objToId)
    },
  },
  Mutation: {
    updateUser: async (...arg) => {
      const [, { user }, { db }] = arg
      if (user.id) {
        const res = await db.collection('user').updateOne({
          _id: idToObj(user.id)
        }, {
          $set: user
        })
        console.log(res)
        return user
      } else {
        const res = await db.collection('user').insertOne({ ...user })
        // console.log(res)
        return {
          ...user,
          id: res.insertedId
        }
      }
    },
    updateUserAuth: async (...arg) => {
      const [, { id, auth }, { db }] = arg
      const res = await db.collection('user').updateOne({
        _id: idToObj(id)
      }, {
        $set: { auth }
      })
      return res.result.ok
    },
  }
}
