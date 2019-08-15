import { getMysqlDb } from '../mysql'


export const getUserCollection = () => getMysqlDb().collection('user')

export const getUser = async (option) => {
  const user = getUserCollection()
  const res = await user.findOne(option)
}

export default {
  getUserCollection,
  getUser
}
