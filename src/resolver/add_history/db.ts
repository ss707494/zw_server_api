import {asyncQuery} from "../../mysql"

export const getSupplementListTotal = async ({product_id}) => {
  // language=MySQL
  const sql = `
      select count(r.id) as num
      from dw_server.r_product_supplement r
               left join dw_server.product_supplement ps on ps.id = r.supplement_id
      where r.product_id in (?)
  `
  const [res] = await asyncQuery(sql, [product_id])
  return res?.[0]?.num ?? 0
}

export const getSupplementListByProductId = async ({product_id}) => {
  // language=MySQL
  const sql = `
      select ps.number,
             r.create_time,
             r.supplier,
             r.product_id,
             r.count,
             r.amount,
             r.supplement_id as id
      from dw_server.r_product_supplement r
               left join dw_server.product_supplement ps on ps.id = r.supplement_id
      where r.product_id in (?)
  `
  const [res] = await asyncQuery(sql, [product_id])
  console.log(res)
  return res
}
