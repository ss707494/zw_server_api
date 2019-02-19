import { getDb } from '../mongoData'

export const getUserCollection = () => getDb().collection('user')

export const getUser = async (option) => {
  const user = getUserCollection()
  const res = await user.findOne(option)
}

export default {
  getUserCollection,
  getUser
}
