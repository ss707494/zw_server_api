import { dealResult, dealSet } from "./common";
import uuidV1 from "uuid/v1";
import { asyncQuery } from "../mysql";
import dateFormat from 'date-format'


const getOrderNumber = id => {
  return dateFormat('yyyyMMddhhmmss', new Date()) + id.slice(0, 6)
}

export default {
  Query: {
    async order_detail(...arg) {
      const [, { id }, { decoded: user }] = arg

      // language=MySQL
      const orderInfoSql = `
          select id,
                 name,
                 create_time,
                 update_time,
                 is_delete,
                 number,
                 state,
                 actually_paid,
                 address_id,
                 payment_method_card_id,
                 subtotal,
                 coupon_discount,
                 vip_discount,
                 transportation_costs,
                 sale_tax,
                 order_id
          from dw_server.order_info
          where id = ?
      `
      const [orderInfo] = await asyncQuery(orderInfoSql, [id])
      // language=MySQL
      const productSql = `

      `
      if (orderInfo.length) {
        return orderInfo[0]
      }
      return {}
    },
    async order_list(...arg) {
      const [, { id }, { decoded: user }] = arg
      console.log(id)

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
      const number = getOrderNumber(user.id)
      // language=MySQL
      const insertOrder = `
insert into dw_server.order_info
set update_time = current_timestamp 
${dealSet({
        id,
        number,
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
          id,
          number,
        }
      })
    },

  },
}
