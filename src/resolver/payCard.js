import { dealResult, dealSet } from "./common";
import { asyncQuery } from "../mysql";
import uuidV1 from "uuid/v1";

export default {
  Query: {
    pay_card_list: async (...arg) => {
      const [, {}, { decoded: user }] = arg
      // language=MySQL
      const getList = `
          select id,
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
          from dw_server.user_pay_card a
          where is_delete = 0
            and  user_id= ?
          order by create_time
      `
      const [res] = await asyncQuery(getList, [user.id])

      return res
    },
  },
  Mutation: {
    set_default_pay_card: async (...arg) => {
      const [, { defaultId }, { decoded: user }] = arg
      // language=MySQL
      const setAll = `
          update dw_server.user_pay_card
          set is_default = 0
          where is_default = 1
            and user_id = ?
      `
      await asyncQuery(setAll, [user.id])
      // language=MySQL
      const setOne = `
          update dw_server.user_pay_card
          set is_default = 1
          where id = ?
            and user_id = ?
      `
      const [res] = await asyncQuery(setOne, [defaultId, user.id])
      return dealResult(res?.affectedRows ?? 0)
    },
    save_pay_card: async (...arg) => {
      const [, { editPayCardInput }, { decoded: user }] = arg

      let id, res
      if (editPayCardInput.id) {
        id = editPayCardInput.id
        // language=MySQL
        const updateAddress = `
update dw_server.user_pay_card
set update_time = current_timestamp
${dealSet({
          ...editPayCardInput,
        })}
where 1 = 1 
and id = ?
`
        res = await asyncQuery(updateAddress, [id])
      } else {
        id = uuidV1()
        // language=MySQL
        const insertAddress = `
insert into dw_server.user_pay_card
    set update_time = current_timestamp  
${dealSet({
          ...editPayCardInput,
          id,
          user_id: user.id
        })}
`
        res = await asyncQuery(insertAddress)
      }
      return dealResult(res[0]?.affectedRows ?? 0, '', {
        payCard: {
          id
        }
      })
    },
  }
}
