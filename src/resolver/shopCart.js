import { dealResult, dealWhere } from "./common";
import { asyncQuery } from "../mysql";
import { queryProductImg } from "./product";

export default {
  Query: {
    shop_cart_list: async (...arg) => {
      const [, , { decoded: user }] = arg
      if (!user.id) {
        throw '没有用户信息'
      }
      // language=MySQL
      const sql = `
select is_next, id, user_id, product_id, number, create_time, update_time from dw_server.shop_cart 
where is_delete = 0 
${dealWhere({
        user_id: user.id,
      })}
`
      const [shopList] = await asyncQuery(sql)
      if (shopList.length) {
        // language=MySQL
        const productListSql = `
          select p.id,
                 p.name,
                 p.create_time,
                 p.update_time,
                 p.is_delete,
                 p.remark,
                 p.is_hot,
                 p.is_new,
                 p.stock,
                 p.unit,
                 p.weight,
                 p.price_in,
                 p.price_out,
                 p.price_market,
                 p.brand,
                 p.number,
                 p.category_id,
                 p.is_enable,
                 p.sort
          from dw_server.product p
          where p.is_delete = 0
            and p.id in (?)
      `
        const [productList] = await asyncQuery(productListSql, [shopList.map(e => e.product_id)])
        if (productList.length) {
          await queryProductImg(productList)
        }
        shopList.forEach(e => {
          e.product = productList.find(e1 => e.product_id === e1.id)
        })
      }
      return shopList
    },
  },
  Mutation: {
    addToShopCart: async (...arg) => {
      const [, { ShopCartInput }, { decoded: user }] = arg
      // language=MySQL
      const getOne = `
select id from dw_server.shop_cart
where user_id = ? and product_id = ? and is_delete = 0
`
      const [getOneRes] = await asyncQuery(getOne, [user.id, ShopCartInput.product_id])
      if (getOneRes.length) {
        // language=MySQL
        const updateOne = `
update dw_server.shop_cart
set number = number + 1
where user_id = ? and product_id = ? and is_delete = 0
`
        await asyncQuery(updateOne, [user.id, ShopCartInput.product_id])
      } else {
        // language=MySQL
        const sql = `
          INSERT into dw_server.shop_cart
              (id, user_id, product_id)
          values (uuid(), ?, ?)
      `
        await asyncQuery(sql, [user.id, ShopCartInput.product_id])
      }

      // console.log(res)
      return dealResult()
    },
    save_shop_cart: async (...arg) => {
      const [, { SaveShopCartInput }] = arg
      // language=MySQL
      const sql = `
          update dw_server.shop_cart
          set number = ?, 
              update_time = current_timestamp,
              is_next = ?
          where id = ?
      `
      await asyncQuery(sql, [SaveShopCartInput.number ?? 1, SaveShopCartInput.is_next ?? 0, SaveShopCartInput.id])
      // console.log(res)
      return dealResult()
    },
    remove_shop_cart: async (...arg) => {
      const [, { id }] = arg
      // language=MySQL
      const sql = `
          update dw_server.shop_cart
          set is_delete = 1
          where id = ?
      `
      const [res] = await asyncQuery(sql, [id])
      // console.log(res)
      return dealResult(res.affectedRows ?? 0)
    },
  }
}
