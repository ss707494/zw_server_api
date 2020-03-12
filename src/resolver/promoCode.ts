import {addOne, getList, updateOne} from "../db/promoCode"
import {getDetail} from "../db/category"

export default {
  PromoCode: {
    category_data: async (promoCode) => {
      console.log(promoCode)
      return getDetail({
        id: promoCode?.product_category,
      })
    }
  },
  Query: {
    promo_code_list: async (...arg) => {
      const [, { PromoCodeInput }] = arg
      return getList(PromoCodeInput)
    },
  },
  Mutation: {
    save_promo_code: async (...arg) => {
      const [, { promoCodeInput }] = arg
      if (promoCodeInput.id) {
        return updateOne(promoCodeInput)
      } else {
        return addOne(promoCodeInput)
      }
    },
  }
}
