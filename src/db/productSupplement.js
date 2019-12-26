import { asyncQuery } from "../mysql";
import uuidV1 from "uuid/v1";
import { dealOrder, dealPage } from "../resolver/common";

export const addProductSupplementDb = async (item) => {
  // language=MySQL
  const [res] = await asyncQuery(`
      insert into dw_server.product_supplement
          (id, user_id, number)
      values ?
  `, [[[item.id, item.userId, item.number]]])

  return res
}

export const addRelationProductSupplementDb = async (addItemList, supplement_id) => {
  // language=MySQL
  const [res] = await asyncQuery(`
      insert into dw_server.r_product_supplement
          (id, supplement_id, product_id, count, amount, supplier, remark)
      values ?
  `, [
    addItemList.map(e => [uuidV1(), supplement_id, e.product_id, e.addNumber ?? 0, e.addPrice ?? 0, e.addSupplier ?? '', e.addRemark ?? ''])
  ])

  return res
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
             user_id
      from dw_server.product_supplement
      where is_delete = 0
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
             remark
      from dw_server.r_product_supplement
      where is_delete = 0
        and supplement_id = ?
  `
  const [res] = await asyncQuery(sql, [productSupplement.id])
  return res
}
