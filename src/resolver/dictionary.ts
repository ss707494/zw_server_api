import {addDictItem, getDictItem, getDictTypeList, updateDictItem} from "../db/dictionary"
import {dealResult} from "./common"

export default {
  Query: {
    dict_type_list: async (...arg) => {

      return await getDictTypeList()
    },
    dict_item_list: async (...arg) => {
      const [, {dictionaryInput}, {}] = arg

      return (await getDictItem(dictionaryInput))
    },
  },
  Mutation: {
    save_dict_item: async (...arg) => {
      const [, {dictionaryInput}, {}] = arg
      if (dictionaryInput?.id) {
        const _res = await updateDictItem(dictionaryInput)
        return dealResult(_res?.affectedRows ?? 0, '', {
          dictionary: {
            ..._res
          }
        })
      } else {
        const _res = await addDictItem(dictionaryInput)
        return dealResult(_res?.affectedRows ?? 0, '', {
          dictionary: {
            id: _res.id,
          }
        })
      }
    }
  }
}
