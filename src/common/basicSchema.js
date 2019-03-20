import { objToId, idToObj } from '../common/objectId'

const getCollection = (db, name) => {
  if (db.listCollections) return
}

export const getBasicSchema = ({dbName}) => {
  const capitalizeFirstLetter = s => s.charAt(0).toUpperCase() + s.slice(1)
  const DbName = capitalizeFirstLetter(dbName)
  return {
    Query: {
      [`one${DbName}`]: async (...arg) => {
        const [, , { db }] = arg
        const res = await db.collection(dbName).find().toArray();
        return res.map(objToId)
      },
      [`all${DbName}`]: async (...arg) => {
        const [, , { db }] = arg
        const res = await db.collection(dbName).find().toArray();
        return res.map(objToId)
      },
    },
    Mutation: {
      [`update${DbName}`]: async (...arg) => {
        const now = new Date()
        const [, { data }, { db }] = arg
        if (data.id) {
          const res = await db.collection(dbName).updateOne({
            _id: idToObj(data.id)
          }, {
            $set: {
              ...data,
              modifyDate: now,
            }
          })
          console.log('updateOne', data)
          return data
        } else {
          const res = await db.collection(dbName).insertOne({
            ...data,
            createDate: now,
            modifyDate: now,
          })
          console.log('insertOne', res.insertedId)
          return {
            ...data,
            createDate: now,
            modifyDate: now,
            id: res ? res.insertedId.toString() : ''
          }
        }
      },
      [`deleteOne${DbName}`]: async (...arg) => {
        const [, { id }, { db }] = arg
        const res = await db.collection(dbName).deleteOne({
          _id: idToObj(id)
        })
        console.log('deleteOne:' + res)
        return `${res.result.n}`
      }
    }
  }
}

