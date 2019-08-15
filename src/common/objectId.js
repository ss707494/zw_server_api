// import { ObjectId } from 'mongodb'

export const objToId = data => (!data || !data._id) ? {} : ({
  ...data,
  id: data._id.toString()
})

export const idToObj = {}
