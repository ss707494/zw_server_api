import {asyncQuery} from "../../mysql"

export const getSupplementListTotal = async ({product_id}) => {
  // language=MySQL
  const sql = `
      select count(r.id) as num
      from dw_server.r_product_supplement r
               left join dw_server.product_supplement ps on ps.id = r.supplement_id
      where r.product_id in (?)
        and ps.is_delete = 0
        and ps.state = 2
  `
  const [res] = await asyncQuery(sql, [product_id])
  return res?.[0]?.num ?? 0
}

export const getSupplementListByProductId = async ({product_id}) => {
  // language=MySQL
  const sql = `
      select ps.number,
             ps.state,
             r.create_time,
             r.supplier,
             r.product_id,
             r.count,
             r.amount,
             r.supplement_id as id
      from dw_server.r_product_supplement r
               left join dw_server.product_supplement ps on ps.id = r.supplement_id
      where r.product_id in (?)
        and ps.is_delete = 0
        and ps.state = 2
      order by ps.create_time desc
  `
  const [res] = await asyncQuery(sql, [product_id])
  return res
}
