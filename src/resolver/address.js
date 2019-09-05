import { dealResult, dealSet } from "./common";
import { asyncQuery } from "../mysql";
import uuidV1 from "uuid/v1";

export default {
  Query: {
    address_list: async (...arg) => {
      const [, { }, { decoded: user }] = arg
      // language=MySQL
      const getList = `
select a.id, a.name, a.id, name, create_time, update_time, is_delete, zip, province, city, district, address, is_default, user_id, contact_information  from dw_server.user_address a 
where is_delete = 0
and user_id = ?
`
      const [res] = await asyncQuery(getList, [user.id])

      return res
    },
  },
  Mutation: {
    save_address: async (...arg) => {
      const [, { editAddressInput }, { decoded: user }] = arg

      let id
      if (editAddressInput.id) {
        id = editAddressInput.id
        // language=MySQL
        const updateAddress = `
update dw_server.user_address
set update_time = current_timestamp
    where 1 = 1
`
        await asyncQuery(updateAddress, [])
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
