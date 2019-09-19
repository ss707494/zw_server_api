import { asyncQuery } from "../mysql";

export const updateUserInfoDb = async (updateUserInfo, userId) => {
  // language=MySQL
  const [res] = await asyncQuery(`update dw_server.user_info u 
set u.update_time = current_timestamp,
    u.name = ?,
    u.phone = ?,
    u.email = ?
where u.user_id = ?
`, [updateUserInfo?.name, updateUserInfo?.phone, updateUserInfo?.email, userId])

  return res
}

export const updatePasswordDb = async (newPassword, userId) => {
  // language=MySQL
  const [res] = await asyncQuery(`update dw_server.user u set u.update_time = current_timestamp, u.password = ? where u.id = ?`,
      [newPassword, userId])

  return res
}

export const getUserById = async (userId) => {
  // language=MySQL
  const [res] = await asyncQuery(`select * from dw_server.user where id = ?`,
      [userId])

  return res[0]
}
