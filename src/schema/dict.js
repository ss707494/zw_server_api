import { objToId, idToObj } from '../common/objectId'

export default {
  Query: {
    oneDict: async (...arg) => {
      const [, , { db }] = arg
      const res = await db.collection('dict').find().toArray();
      return res.map(objToId)
    },
    allDict: async (...arg) => {
      const [, , { db }] = arg
      const res = await db.collection('dict').find().toArray();
      return res.map(objToId)
    },
  },
  Mutation: {
    updateDict: async (...arg) => {
      const [, { dict }, { db }] = arg
      if (dict.id) {
        const res = await db.collection('dict').updateOne({
          _id: idToObj(dict.id)
        }, {
          $set: dict
        })
        return dict
      } else {
        const res = await db.collection('dict').insertOne({ ...dict })
        console.log(res)
        return {
          ...dict,
          id: res ? objToId(res.insertedId) : ''
        }
      }
    },
  }
}
