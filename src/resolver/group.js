import { asyncQuery } from "../mysql";
import { queryProductDetail } from "./product";
import uuidV1 from "uuid/v1";
import { getOrderNumber } from "./order";
import { raw } from "mysql";
import { dealResult } from "./common";

export default {
  GroupQueue: {
    product: (group) => {
      return queryProductDetail({ id: group.product_id })
    }
  },
  Query: {
    group_queue_list: async (...arg) => {
      const [, { groupQueueListInput }, {}] = arg
      // language=MySQL
      const sql = `select q.id, name, create_time, update_time, is_delete, product_id, fill_amount
                   from dw_server.group_queue as q
                   where is_delete = 0
                     and product_id like ?`
      const [res] = await asyncQuery(sql, [groupQueueListInput?.product_id ?? '%%'])
      return res
    },
  },
  Mutation: {
    save_group_order: async (...arg) => {
      const [, { saveGroupOrderInput, saveOrderInput }, { decoded: user }] = arg
      const order_id = uuidV1()
      const number = getOrderNumber(user.id)
      const {
        product_id,
        group_queue_id,
        order_group_amount,
        origin_group_amount,
      } = saveGroupOrderInput
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
        discount_product_total,
      } = saveOrderInput
      // language=MySQL
      const insertOrder = `
          insert into dw_server.order_info
          (dw_server.order_info.update_time,
           dw_server.order_info.id,
           dw_server.order_info.number,
           dw_server.order_info.state,
           dw_server.order_info.actually_paid,
           dw_server.order_info.address_id,
           dw_server.order_info.payment_method_card_id,
           dw_server.order_info.subtotal,
           dw_server.order_info.coupon_discount,
           dw_server.order_info.vip_discount,
           dw_server.order_info.transportation_costs,
           dw_server.order_info.discount_product_total,
           dw_server.order_info.sale_tax)
          values ?
      `
      await asyncQuery(insertOrder, [[[
        raw('current_timestamp'),
        order_id,
        number,
        state,
        actually_paid,
        address_id,
        payment_method_card_id,
        subtotal,
        coupon_discount,
        vip_discount,
        transportation_costs,
        discount_product_total,
        sale_tax,
      ]]])

      const new_group_queue_id = uuidV1()
      // language=MySQL
      const insertGroupOrder = `insert into dw_server.group_order
                                    (id, group_queue_id, order_group_amount, user_id, order_id)
                                values ?;`
      await asyncQuery(insertGroupOrder, [[[
        raw('uuid()'),
        group_queue_id ?? new_group_queue_id,
        order_group_amount,
        user.id,
        order_id,
      ]]])

      if (group_queue_id) {
        // language=MySQL
        const updateGroupQueue = `update dw_server.group_queue
                                  set update_time = current_timestamp,
                                      fill_amount = ?
                                  where id = ?`
        const [updateGroupQueueRes] = await asyncQuery(updateGroupQueue, [origin_group_amount + order_group_amount, group_queue_id])
        return dealResult(updateGroupQueueRes?.affectedRows ?? 0, '', {
          order: {
            id: order_id,
            number,
          }
        })
      } else {
        // language=MySQL
        const insertGroupQueue = `insert dw_server.group_queue
                                      (id, product_id, fill_amount)
                                  values ?;`
        const [insertGroupQueueRes] = await asyncQuery(insertGroupQueue, [[[
          new_group_queue_id,
          product_id,
          order_group_amount,
        ]]])
        return dealResult(insertGroupQueueRes?.affectedRows ?? 0, '', {
          order: {
            id: order_id,
            number,
          }
        })
      }

    }
  }
}
