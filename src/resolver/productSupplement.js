import {
  addProductSupplementDb,
  addRelationProductSupplementDb, getAddItemList,
  getProductSupplementList,
  updateProdectDb
} from "../db/productSupplement";
import { getOrderNumber } from "./order";
import uuidV1 from "uuid/v1";
import { dealResult } from "./common";
import { queryProductDetail } from "./product";

export default {
  AddItem: {
    product: async (addItem) => {
      return await queryProductDetail({ id: addItem.product_id })
    }
  },
  ProductSupplement: {
    addItemList: async (productSupplement) => {
      return await getAddItemList(productSupplement)
    }
  },
  Query: {
    product_supplement_list: async (...arg) => {
      const [, { productSupplementListInput },] = arg
      return await getProductSupplementList(productSupplementListInput)
    },
    product_supplement_list_total: async (...arg) => {
      const [, { productSupplementListInput },] = arg
      return (await getProductSupplementList({
        ...productSupplementListInput,
        rows_per_page: false
      })).length
    }
  },
  Mutation: {
    save_product_supplement: async (...arg) => {
      const [, { productSupplementInput }, { decoded: user }] = arg

      if (!productSupplementInput.id) {
        const number = getOrderNumber(user.id)
        const id = uuidV1()
        const addProductSupplementRes = await addProductSupplementDb({
          id,
          userId: user.id,
          number,
        })
        const addRelationProductSupplementRes = await addRelationProductSupplementDb(productSupplementInput.addList, id)
        for (const v of productSupplementInput.addList) {
          const updateProdectDbRes = await updateProdectDb(v)
          console.log(updateProdectDbRes)
        }
        console.log(addProductSupplementRes)
        console.log(addRelationProductSupplementRes)
        return dealResult(addProductSupplementRes?.affectedRows ?? 0, '', {})
      } else {
        return dealResult(0)
      }
    },
  },
}
