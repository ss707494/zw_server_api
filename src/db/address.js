import { asyncQuery } from "../mysql";

export const getAddressDetailDb = async (ids) => {
  // language=MySQL
  const [res] = await asyncQuery(`
      select id, name, create_time, update_time, is_delete, zip, province, city, district, address, is_default, user_id
      from dw_server.user_address a
      where a.id in ?;
  `, [[ids]])
  if (!res.length) {
    return {}
  }
  return res
}
