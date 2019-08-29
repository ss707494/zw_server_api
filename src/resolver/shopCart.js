import { dealResult, dealWhere } from "./common";
import { asyncQuery } from "../mysql";
import { queryProductImg } from "./product";

export default {
  Query: {
    shop_cart_list: async (...arg) => {
      const [, , { decoded: user }] = arg

      // language=MySQL
      const sql = `
select id, user_id, product_id, number, create_time, update_time from dw_server.shop_cart 
where is_delete = 0 
${dealWhere({
        user_id: user.id,
      })}
`
      const [shopList] = await asyncQuery(sql)
      // language=MySQL
      const productListSql = `
select p.id, p.name, p.create_time, p.update_time, p.is_delete, p.remark, p.is_hot, p.is_new, p.stock, p.unit, p.weight, p.price_in, p.price_out, p.price_market, p.brand, p.number, p.category_id,p.is_enable, p.sort 
from dw_server.product p
where p.is_delete = 0
and p.id in (?)
`
      const [productList] = await asyncQuery(productListSql, [shopList.map(e => e.product_id)])
      if (productList.length) {
        await queryProductImg(productList)
      }
      productList.forEach(e => {
        const item = shopList.find(e1 => e1.product_id === e.id)
        item.product = e
      })

      return shopList
    },
  },
  Mutation: {
    addToShopCart: async (...arg) => {
      const [, { ShopCartInput }, { decoded: user }] = arg

      // language=MySQL
      const sql = `
INSERT into dw_server.shop_cart
(id, user_id, product_id)
values 
(uuid(), ?, ?)
on duplicate key update 
number = number + 1,
    update_time = current_timestamp
`
      await asyncQuery(sql, [user.id, ShopCartInput.product_id])
      // console.log(res)
      return dealResult()
    },
  }
}
