import { asyncQuery } from "../mysql";

export const getPayCardDetailDb = async (ids) => {
  // language=MySQL
  const [res] = await asyncQuery(`
      select p.id,
             name,
             create_time,
             update_time,
             is_delete,
             user_id,
             number,
             code,
             user_name,
             address_detail,
             zip_code,
             city,
             contact,
             is_default
      from dw_server.user_pay_card p
      where p.id in ?
  `, [[ids]])
  if (!res.length) {
    return {}
  }

  return res
}
