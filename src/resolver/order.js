import { dealResult, dealSet, dealWhere } from "./common";
import uuidV1 from "uuid/v1";
import { asyncQuery } from "../mysql";
import dateFormat from 'date-format'
import { getPayCardDetailDb } from "../db/payCard";
import { getAddressDetailDb } from "../db/address";
import { getAllOrderListDb, getOrderListDb, getProductByOrderIdDb, updateOrder } from "../db/order";
import { getGroupOrderListDb, getProductByGroupOrderIdDb } from "../db/groupOrder";
import { getUserById } from "../db/user";

export const getOrderNumber = id => {
  return id.slice(0, 6) + dateFormat('yyyyMMddhhmmss', new Date())
}

const dealPaymentAddress = async (orderList) => {
  const paymentMethodList = await getPayCardDetailDb(orderList.map(e => e.payment_method_card_id))
  const addressList = await getAddressDetailDb(orderList.map(e => e.address_id))
  return orderList.map(e => ({
    ...e,
    payment_method: paymentMethodList.find(e1 => e1.id === e.payment_method_card_id),
    address: addressList.find(e1 => e1.id === e.address_id),
  }))
}

export default {
  Order: {
    async user(order) {
      return await getUserById(order.user_id)
    }
  },
  Query: {
    async all_order_list(...arg) {
      const [, { allOrderListInput }, {}] = arg
      const orderList = await getAllOrderListDb(allOrderListInput)
      if (!orderList.length) {
        return []
      }
      const productList = await getProductByOrderIdDb(orderList.map(e => e.id))
      return (await dealPaymentAddress(orderList)).map(e => ({
        ...e,
        product: productList.filter(e1 => e1.order_id === e.id),
      }))
    },
    async all_order_list_total(...arg) {
      const [, { allOrderListInput }, {}] = arg
      const orderList = await getAllOrderListDb({
        ...allOrderListInput,
        rows_per_page: 0
      })
      return orderList.length
    },
    async order_detail(...arg) {
      const [, { id, isGroup }] = arg
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
                 discount_product_total,
                 order_id,
                 finish_time
          from dw_server.order_info
          where id = ?
      `
      const [orderInfo] = await asyncQuery(orderInfoSql, [id])
      const product = isGroup ? await getProductByGroupOrderIdDb([id]) : await getProductByOrderIdDb([id])
      const [payment_method] = await getPayCardDetailDb([orderInfo[0]?.payment_method_card_id])
      const [address] = await getAddressDetailDb([orderInfo[0]?.address_id])
      if (orderInfo.length) {
        return {
          ...orderInfo[0],
          product,
          payment_method,
          address,
        }
      }
      return {}
    },
    async order_list(...arg) {
      const [, , { decoded: user }] = arg
      const orderList = await getOrderListDb(user.id)
      if (!orderList.length) {
        return []
      }
      const productList = await getProductByOrderIdDb(orderList.map(e => e.id))
      return (await dealPaymentAddress(orderList)).map(e => ({
        ...e,
        product: productList.filter(e1 => e1.order_id === e.id),
      }))
    },
    async group_order_list(...arg) {
      const [, , { decoded: user }] = arg
      const orderList = await getGroupOrderListDb(user.id)
      if (!orderList.length) {
        return []
      }
      const productList = await getProductByGroupOrderIdDb(orderList.map(e => e.id))
      return (await dealPaymentAddress(orderList)).map(e => ({
        ...e,
        product: productList.filter(e1 => e1.order_id === e.id),
      }))
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
        finish_time,
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
        finish_time,
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
    async finish_order(...arg) {
      const [, { saveOrderInput }, {}] = arg
      const updateOrderRes = await updateOrder({
        ...saveOrderInput,
        state: 6
      })
      const productList = await getProductByOrderIdDb([saveOrderInput?.id])
      for (const product of productList) {
        // language=MySQL
        const updateProduct = `update dw_server.product
  set update_time = current_timestamp
      ${dealSet({
            stock: product?.sort - product?.count
          })}
  where 1 = 1
        ${dealWhere({
            id: product?.id
          })}
        `
        await asyncQuery(updateProduct)
      }
      return dealResult(updateOrderRes?.affectedRows ?? 0, '', {
        order: {
          id: saveOrderInput?.id,
        }
      })
    },
  },
}
