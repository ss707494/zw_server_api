import { compareSync, genSaltSync, hashSync } from 'bcrypt'
import { objToId, idToObj } from '../common/objectId'
import { getBasicSchema } from '../common/basicSchema'

const basicSchema = getBasicSchema({dbName: 'user'})

export default {
  ...basicSchema,
  Mutation: {
    ...basicSchema.Mutation,
    changePassword: async (...arg) => {
      const [, { data }, { db }] = arg
      const res = await db.collection('dict').findOne({
        type: 'verification'
      })
      const val = compareSync(data.verification, res.message)
      if (val) {
        const hash = hashSync(data.newPass, genSaltSync(10))
        db.collection('user').updateOne({
          _id: idToObj(data.id)
        }, {
          $set: {
            password: hash
          }
        })
      }
      console.log('changePassword: ' + val)
      return `操作${val ? '成功' : '失败'}`
    }
  },
}
