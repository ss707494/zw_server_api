import { dealResult, dealSet } from "./common";
import uuidV1 from "uuid/v1";
import { asyncQuery } from "../mysql";
import dateFormat from 'date-format'


const getOrderNumber = id => {
  return dateFormat('yyyyMMdd', new Date()) + id.slice(0, 6)
}

export default {
  Query: {
    async order_list(...arg) {
      const [, {}, { decoded: user }] = arg

      console.log(user)
      return []
    },
  },
  Mutation: {
    async save_order(...arg) {
      const [, { saveOrderInput }, { decoded: user }] = arg
      const {
        state,
        actually_paid,
        address_id,
        payment_method_card_id,
        subtotal,
        coupon_discount,
        vip_discount,
        transportation_costs,
        sale_tax,
        product,
        // user: orderUser,
      } = saveOrderInput
      const id = uuidV1()
      // language=MySQL
      const insertOrder = `
insert into dw_server.order_info
set update_time = current_timestamp 
${dealSet({
        id,
        number: getOrderNumber(user.id),
        state,
        actually_paid,
        address_id,
        payment_method_card_id,
        subtotal,
        coupon_discount,
        vip_discount,
        transportation_costs,
        sale_tax,
      })}
`
      const [insertOrderRes] = await asyncQuery(insertOrder)
      // language=MySQL
      const insertOrderProduct = `
          insert into dw_server.r_order_product
          (id, dw_server.r_order_product.product_id, dw_server.r_order_product.order_id, count)
          values ?
      `
      await asyncQuery(insertOrderProduct, [product.map(e => [uuidV1(), e.product_id, id, e.count])])
      // language=MySQL
      const insertOrderUser = `
          insert into dw_server.r_order_user
              (id, dw_server.r_order_user.user_id, dw_server.r_order_user.order_id)
          values ?
      `
      await asyncQuery(insertOrderUser, [[[uuidV1(), user.id, id]]])

      return dealResult(insertOrderRes?.affectedRows ?? 0, '', {
        order: {
          id
        }
      })
    },

  },
}
