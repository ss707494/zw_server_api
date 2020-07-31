import { asyncQuery } from "../../mysql"
import uuidV1 from "uuid/v1"
import { dealOrder, dealPage } from "../common"

export const addProductSupplementDb = async (item) => {
  // language=MySQL
  const [res] = await asyncQuery(`
      insert into dw_server.product_supplement
          (id, user_id, number, state, isGroup)
      values ?
  `, [[[item.id, item.userId, item.number, 1, item.isGroup]]])

  return res
}
export const updateProductSupplementDb = async (item) => {
  // language=MySQL
  const [res] = await asyncQuery(`
      update dw_server.product_supplement
      set update_time = current_timestamp,
          number      = COALESCE(?, number),
          supplier    = COALESCE(?, supplier),
          state       = COALESCE(?, state)
      where id = ?
  `, [item.number, item.supplier, item.state, item.id])

  return res
}

export const addRelationProductSupplementDb = async (addItemList, supplement_id) => {
  // language=MySQL
  const [res] = await asyncQuery(`
      insert into dw_server.r_product_supplement
          (id, supplement_id, product_id, count, amount, supplier, remark)
      values ?
  `, [
    addItemList.map(e => [uuidV1(), supplement_id, e.product_id, e.addNumber ?? 0, e.addPrice ?? 0, e.addSupplier ?? '', e.addRemark ?? '']),
  ])
  // language=MySQL
  await asyncQuery(`update dw_server.r_product_supplement r
      left join dw_server.product p on p.id = r.product_id
                    set r.lastOutAmount = p.price_out
                    where r.product_id in (?)
  `, [addItemList.map(e => e.product_id)])

  return res
}
export const updateRelationProductSupplementOneDb = async (item) => {
  // language=MySQL
  const sql = `update dw_server.r_product_supplement
               set update_time = current_timestamp,
                   count       = COALESCE(?, count),
                   amount      = COALESCE(?, amount),
                   supplier    = COALESCE(?, supplier),
                   remark      = COALESCE(?, remark)
               where id = ?
  `
  await asyncQuery(sql, [item.addNumber, item.addPrice, item.addSupplier, item.addRemark, item.id])

}

export const updateRelationProductSupplementDb = async (addItemList) => {
  addItemList.map(async item => {
    await updateRelationProductSupplementOneDb(item)
  })
  return {}
}

export const updateProdectDb = async (addItem) => {
// language=MySQL
  const [res] = await asyncQuery(`
      update dw_server.product p
      set update_time = current_timestamp,
          stock       = stock + ?,
          price_in    = ?
      where id = ?
  `, [addItem.addNumber, addItem.addPrice, addItem.product_id])

  return res
}

export const getProductSupplementList = async (productSupplementListInput) => {
  console.log(productSupplementListInput.isGroup)
  // language=MySQL
  const sql = `
      select id,
             name,
             create_time,
             update_time,
             is_delete,
             state,
             amount,
             number,
             code,
             supplier,
             isGroup,
             user_id
      from dw_server.product_supplement
      where is_delete = 0
      and isGroup = ${productSupplementListInput.isGroup ?? 0 }
      ${dealOrder(productSupplementListInput, ' order by create_time desc')}
      ${dealPage(productSupplementListInput)}
  `
  const [res] = await asyncQuery(sql)
  return res
}

export const getAddItemList = async (productSupplement) => {
  // language=MySQL
  const sql = `
      select id,
             name,
             create_time,
             update_time,
             is_delete,
             supplement_id,
             product_id,
             count,
             amount,
             supplier,
             remark,
             lastOutAmount
      from dw_server.r_product_supplement
      where is_delete = 0
        and supplement_id = ?
  `
  const [res] = await asyncQuery(sql, [productSupplement.id])
  return res
}
