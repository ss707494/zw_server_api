import { asyncQuery } from '../mysql'
import uuidV1 from 'uuid/v1'
import { dealOrder, dealPage, dealResult, dealSet, dealWhere, dealWhereLike } from './common'
import { raw } from "mysql";
import { getGroupInfo } from "../db/groupOrder";

export const queryProductImg = async (productList) => {
  productList.forEach(e => {
    e.imgs = []
  })
  // 查询商品图片
  // language=MySQL
  const getImgSql = `
          select p.id as product_id, i.name, i.url, i.number, i.id as id
          from dw_server.product_img i
                   left join dw_server.product p on i.product_id = p.id
          where i.product_id in (${productList.map(e => `"${e.id}"`).join(',')})
order by i.number
      `
  const [imgRes] = await asyncQuery(getImgSql)
  imgRes.forEach(e => {
    const item = productList.find(e1 => e.product_id === e1.id)
    item.imgs = [
      ...(item.imgs ?? []),
      e
    ]
  })
}

export const queryProductDetail = async (product) => {
  // language=MySQL
  const [res] = await asyncQuery(`select p.id,
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
                                         p.sort,
                                         p.is_group,
                                         p.group_amount,
                                         p.group_precision,
                                         p.group_remark,
                                         c1.name   as c1_name,
                                         c1.id     as c1_id,
                                         c1.number as c1_number,
                                         c2.id     as c2_id,
                                         c2.name   as c2_name,
                                         c2.number as c2_number,
                                         c3.id     as c3_id,
                                         c3.name   as c3_name,
                                         c3.number as c3_number
                                  from dw_server.product p
                                           left join dw_server.category c1 on p.category_id = c1.id
                                           left join dw_server.category c2 on c1.parent_id = c2.id
                                           left join dw_server.category c3 on c2.parent_id = c3.id
                                  where p.is_delete = 0
                                    and p.id = ?`, [product.id])
  if (res.length) {
    await queryProductImg(res)
  }

  return res[0]
}

export default {
  Product: {
    group_info: async (product) => {
      const groupList = await getGroupInfo(product)
      const finish = groupList.filter(e => e.fill_amount === product.group_precision).length
      return {
        finish,
        doing: groupList.length - finish
      }
    }
  },
  Query: {
    product_total: async (...arg) => {
      const [, { ListInput }] = arg
      // language=MySQL
      const sql = `
select count(p.id) as num
from dw_server.product p
                   left join dw_server.category c1 on p.category_id = c1.id
                   left join dw_server.category c2 on c1.parent_id = c2.id
                   left join dw_server.category c3 on c2.parent_id = c3.id
where p.is_delete = 0 
${ListInput?.origin_category_id ? `and (c1.id = "${ListInput?.origin_category_id}" or c2.id = "${ListInput?.origin_category_id}" or c3.id = "${ListInput?.origin_category_id}")` : ''}
${dealWhere({
        category_id: ListInput?.category_id,
        is_group: ListInput?.is_group === -1 ? null : ListInput?.is_group ? ListInput?.is_group : 0,
      }, 'p')}
${dealWhereLike({
        name: ListInput?.name,
        number: ListInput?.number,
      }, 'p')}
      `
      const [res] = await asyncQuery(sql)
      return res?.[0]?.num ?? 0
    },
    product_list: async (...arg) => {
      const [, { ListInput }] = arg
      // language=MySQL
      const sql = `
select p.id, p.name, p.create_time, p.update_time, p.is_delete, p.remark, p.is_hot, p.is_new, p.stock, p.unit, p.weight, p.price_in, p.price_out, p.price_market, p.brand, p.number, p.category_id,p.is_enable,
       p.sort, p.is_group, p.group_amount, p.group_precision, p.group_remark,
       p.shelvesTypes,
                 c1.name as c1_name,
                 c1.id as c1_id, 
                 c1.number as c1_number,
                 c2.id   as c2_id,
                 c2.name as c2_name,
                 c2.number as c2_number,
                 c3.id   as c3_id,
                 c3.name as c3_name,
                 c3.number as c3_number
from dw_server.product p
                   left join dw_server.category c1 on p.category_id = c1.id
                   left join dw_server.category c2 on c1.parent_id = c2.id
                   left join dw_server.category c3 on c2.parent_id = c3.id
where p.is_delete = 0 
${ListInput?.origin_category_id ? `and (c1.id = "${ListInput?.origin_category_id}" or c2.id = "${ListInput?.origin_category_id}" or c3.id = "${ListInput?.origin_category_id}")` : ''}
${dealWhere({
        category_id: ListInput?.category_id,
        is_group: ListInput?.is_group === -1 ? null : ListInput?.is_group ? ListInput?.is_group : 0,
      }, 'p')}
${dealWhereLike({
        name: ListInput?.name,
        number: ListInput?.number,
      }, 'p')}
${dealOrder(ListInput, 'order by p.sort, p.id ')} 
${dealPage(ListInput)}
      `
      const [res] = await asyncQuery(sql)
      if (res.length) {
        await queryProductImg(res)
      }
      return res
    }
  },
  Mutation: {
    save_product: async (...arg) => {
      const [, { ProductInput }] = arg
      if (ProductInput?.id) {
        const { imgs, ...otherProduct } = ProductInput
        // language=MySQL
        const sql = `
update dw_server.product
set update_time = current_timestamp
    ${dealSet(otherProduct)}
where 1 = 1
      ${dealWhere({
          id: otherProduct?.id
        })}
        `
        await asyncQuery(sql)
        // console.log(res)
        if (imgs?.length) {
          for (const e of imgs) {
            // language=MySQL
            const [imgRes] = await asyncQuery(`
                select id
                from dw_server.product_img
                where product_id = ?
                  and number = ?
            `, [ProductInput?.id, e?.number])
            if (imgRes.length) {
              // language=MySQL
              await asyncQuery(`update dw_server.product_img i
                                set update_time = current_timestamp,
                                    i.url       = ?,
                                    name        = ?
                                where i.product_id = ?
                                  and i.number = ?;`,
                  [e?.url, e?.name, ProductInput?.id, e?.number])
            } else {
              // language=MySQL
              const sql = `insert into dw_server.product_img
                               (update_time, id, product_id, number, name, url)
                           values ?`
              await asyncQuery(sql, [[[raw('current_timestamp'), raw('uuid()'), ProductInput?.id, e?.number, e?.name, e?.url]]])
            }
          }
//           // language=MySQL
//           const insertImg = `
// insert into dw_server.product_img
// (update_time, id, product_id, number, name, url)
// values
// ${imgs.map(e => `(current_timestamp, uuid(), "${ProductInput?.id}", ${e?.number}, "${e?.name ?? ''}", "${e?.url}")`).join(' , ')}
// on duplicate key update
// update_time = current_timestamp,
//                         id = values(id),
//                       product_id = values(product_id),
//                         number = values(number),
//                         name = values(name),
//                         url = values(url)
//           `
//           const imgRes = await asyncQuery(insertImg)
//           console.log(imgRes)
        }
        return dealResult(1, '', {
          product: {
            ...ProductInput,
          }
        })
      } else {
        const id = uuidV1()
        const { imgs, ...otherProduct } = ProductInput
        // language=MySQL
        const sql = `
insert into dw_server.product
set update_time = current_timestamp,
    id = "${id}" 
    ${dealSet(otherProduct)}
        `
        await asyncQuery(sql)
        if (imgs?.length) {
          // language=MySQL
          const insertImg = `
insert into dw_server.product_img
(update_time, id, product_id, number, name, url)
values 
${imgs.map(e => `(current_timestamp, uuid(), "${id}", ${e?.number}, "${e?.name ?? ''}", "${e?.url}")`).join(' , ')}
          `
          await asyncQuery(insertImg)
          // console.log(imgRes)
        }
        return dealResult(1, '', {
          product: {
            ...ProductInput,
            id
          }
        })
      }
    }
  },
}
