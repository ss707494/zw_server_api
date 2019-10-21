import { asyncQuery } from "../mysql";

export const getProductByGroupOrderIdDb = async (ids) => {
  // language=MySQL
  const productSql = `
      select r.id,
             r.name,
             r.create_time,
             r.update_time,
             r.is_delete,
             r.order_id,
             r.order_group_amount,
             r.group_queue_id,
             p.id,
             p.name,
             p.create_time,
             p.update_time,
             p.is_delete,
             p.product_id,
             p.number,
             p.url as oneImgUrl,
             p1.id,
             p1.name,
             p1.create_time,
             p1.update_time,
             p1.is_delete,
             p1.category_id,
             p1.remark,
             p1.is_hot,
             p1.is_new,
             p1.is_enable,
             p1.sort,
             p1.stock,
             p1.unit,
             p1.weight,
             p1.price_in,
             p1.price_out,
             p1.price_market,
             p1.brand,
             p1.number,
             q.fill_amount
      from dw_server.group_order r
          left join dw_server.group_queue q on r.group_queue_id = q.id
               left join dw_server.product p1 on q.product_id = p1.id
               left join dw_server.product_img p on p1.id = p.product_id
      where r.is_delete = 0
        and r.order_id in ?
      group by r.id
  `
  const [res] = await asyncQuery(productSql, [[ids]])
  if (!res.length) {
    return []
  }
  return res
}

export const getGroupOrderListDb = async (userId) => {
  // language=MySQL
  const [res] = await asyncQuery(`
      select r.id as u_id,
             r.name,
             r.create_time,
             r.update_time,
             r.is_delete,
             r.user_id,
             r.order_id as id,
             r.order_group_amount,
             r.group_queue_id,
             i.id as info_id,
             i.name,
             i.create_time,
             i.update_time,
             i.is_delete,
             i.number,
             i.state,
             i.actually_paid,
             i.address_id,
             i.payment_method_card_id,
             i.subtotal,
             i.coupon_discount,
             i.vip_discount,
             i.transportation_costs,
             i.sale_tax,
             i.discount_product_total,
             i.order_id as info_order_id
      from dw_server.group_order r
               left join dw_server.order_info i on r.order_id = i.id
      where r.is_delete = 0
        and i.is_delete = 0
        and r.user_id = ?
order by r.create_time desc
  `, [userId])
  return res
}

export const getGroupInfo = async (product) => {
  // language=MySQL
  const sql = `select q.id, name, create_time, update_time, is_delete, product_id, fill_amount
                   from dw_server.group_queue as q
                   where is_delete = 0
                     and product_id like ?`
  const [res] = await asyncQuery(sql, [product?.id ?? '%%'])
  return res
}
