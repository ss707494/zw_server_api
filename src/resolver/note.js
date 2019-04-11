import { objToId, idToObj } from '../common/objectId'
import { getBasicSchema } from '../common/basicSchema'
import { getImg } from '../common/drawImg'

const basicSchema = getBasicSchema({ dbName: 'note' })

export default {
  ...basicSchema,
  Query: {
    ...basicSchema.Query,
    detailImg: async (...arg) => {
      const [, { id }, { db }] = arg
      const [res] = await db.collection('note').find({
        _id: idToObj(id)
      }).toArray()
      const contentImg = getImg(res.content)
      return {
        ...res,
        contentImg,
      }
    },
  },
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
