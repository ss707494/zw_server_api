import { getUserCollection } from '../db/user'

export const login = async (req, res) => {
  const userCol = getUserCollection()
  const user = await userCol.findOne({name: req.body.name})
}

export default {
  login
}
