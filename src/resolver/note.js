import { objToId, idToObj } from '../common/objectId'
import { getBasicSchema } from '../common/basicSchema'

export default {
  ...getBasicSchema({dbName: 'note'}),
  Note: {
    book: async (...arg) => {
      const [note, , { db }] = arg
      if (!note.bookId) {
        return {}
      }
      const res = await db.collection('book').findOne({
        _id: idToObj(note.bookId)
      })
      return objToId(res)
    }
  },
}
