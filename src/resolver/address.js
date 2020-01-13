import { dealResult, dealSet } from "./common";
import { asyncQuery } from "../mysql";
import uuidV1 from "uuid/v1";

export default {
  Query: {
    address_list: async (...arg) => {
      const [, {}, { decoded: user }] = arg
      // language=MySQL
      const getList = `
          select a.id,
                 a.name,
                 a.id,
                 name,
                 create_time,
                 update_time,
                 is_delete,
                 zip,
                 province,
                 city,
                 district,
                 address,
                 is_default,
                 user_id,
                 contact_information,
                 contact_user_name
          from dw_server.user_address a
          where is_delete = 0
            and user_id = ?
          order by create_time
      `
      const [res] = await asyncQuery(getList, [user.id])

      return res
    },
  },
  Mutation: {
    set_default_address: async (...arg) => {
      const [, { defaultId }, { decoded: user }] = arg
      // language=MySQL
      const setAll = `
          update dw_server.user_address
          set is_default = 0
          where is_default = 1
            and user_id = ?
      `
      await asyncQuery(setAll, [user.id])
      // language=MySQL
      const setOne = `
          update dw_server.user_address
          set is_default = 1
          where id = ?
            and user_id = ?
      `
      const [res] = await asyncQuery(setOne, [defaultId, user.id])
      return dealResult(res?.affectedRows ?? 0)
    },
    save_address: async (...arg) => {
      const [, { editAddressInput }, { decoded: user }] = arg

      let id
      if (editAddressInput.id) {
        id = editAddressInput.id
        // language=MySQL
        const updateAddress = `
update dw_server.user_address
set update_time = current_timestamp
${dealSet({
          ...editAddressInput,
        })}
where 1 = 1 
and id = ?
`
        await asyncQuery(updateAddress, [id])
      } else {
        id = uuidV1()
        // language=MySQL
        const insertAddress = `
insert into dw_server.user_address
    set update_time = current_timestamp  
${dealSet({
          ...editAddressInput,
          id,
          user_id: user.id
        })}
`
        await asyncQuery(insertAddress)
      }
      return dealResult(1, '', {
        address: {
          id
        }
      })
    },
  }
}
