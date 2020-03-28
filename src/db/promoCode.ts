import uuidV1 from "uuid/v1"
import {asyncQuery} from "../mysql"
import {dealResult, dealSet} from "../resolver/common"

export const getList = async (PromoCodeInput: PromoCode) => {

  // language=MySQL
  const sql = `select id,
                      name,
                      create_time,
                      update_time,
                      is_delete,
                      remark,
                      title,
                      discount_type,
                      discount_amount,
                      discount_condition,
                      discount_condition_amount,
                      product_category,
                      img_url,
                      effective_date_start,
                      effective_date_end,
                      promo_code_type,
                      reuse_times,
                      isDisable,
                      code
               from dw_server.promo_code
               where is_delete = 0
                 and promo_code_type = ?
  `

  const [res] = await asyncQuery(sql, [PromoCodeInput?.promo_code_type])
  return res
}

const promoCodeData: PromoCode = {
  code: "",
  create_time: null,
  discount_amount: 0,
  discount_condition: "No",
  discount_condition_amount: 0,
  discount_type: "",
  effective_date_end: null,
  effective_date_start: null,
  id: "",
  img_url: "",
  is_delete: 0,
  name: "",
  product_category: "",
  promo_code_type: "",
  remark: "",
  reuse_times: 1,
  title: "",
  isDisable: 0,
  update_time: null
}

export const addOne = async (promoCodeInput: PromoCode) => {

  const promoCodeInputParam = {
    ...promoCodeData,
    ...promoCodeInput,
  }
  const _id = uuidV1()
  // language=MySQL
  const sql = `insert into dw_server.promo_code (id, name, remark, title,
                                                 discount_type, discount_amount, discount_condition,
                                                 discount_condition_amount, product_category, img_url,
                                                 effective_date_start, effective_date_end, promo_code_type, reuse_times,
                                                 code)
               VALUES (?)`
  const [res] = await asyncQuery(sql, [[_id, promoCodeInputParam?.name, promoCodeInputParam?.remark, promoCodeInputParam?.title, promoCodeInputParam?.discount_type, promoCodeInputParam?.discount_amount, promoCodeInputParam?.discount_condition, promoCodeInputParam?.discount_condition_amount, promoCodeInputParam.product_category, promoCodeInputParam.img_url, promoCodeInputParam.effective_date_start, promoCodeInputParam.effective_date_end, promoCodeInputParam.promo_code_type, promoCodeInputParam.reuse_times, promoCodeInputParam.code]])
  return dealResult(res?.affectedRows, '', {
    promoCode: {
      ...promoCodeInputParam,
      id: _id,
    }
  })
}

export const updateOne = async (promoCodeInput: PromoCode) => {

  const promoCodeInputParam = {
    ...promoCodeInput,
  }
  // language=MySQL
  const sql = `update dw_server.promo_code 
set update_time = current_timestamp
, isDisable = 0
${dealSet(promoCodeInputParam)}
${promoCodeInputParam.isDisable === 0 ? ', isDisable = 0 ' : ''}
where id = ?`
  const [res] = await asyncQuery(sql, [promoCodeInputParam.id])
  return dealResult(res?.affectedRows, '', {
    promoCode: {
      ...promoCodeInputParam,
    }
  })
}

