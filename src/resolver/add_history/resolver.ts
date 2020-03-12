import {getSupplementListByProductId, getSupplementListTotal} from "./db"

export default {
  Query: {
    add_history_list_by_product: async (...arg) => {
      const [, {addHistoryInput}, {}] = arg
      return await getSupplementListByProductId(addHistoryInput)
    },
    add_history_list_total: async (...arg) => {
      const [, {addHistoryInput}, {}] = arg
      return await getSupplementListTotal(addHistoryInput)
    },
  },
}
