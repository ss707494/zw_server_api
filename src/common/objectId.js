import { ObjectId } from 'mongodb'

export const objToId = data => ({
  ...data,
  id: data._id.toString()
})

export const idToObj = ObjectId
