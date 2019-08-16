import { asyncQuery } from "../mysql";
import uuidV1 from 'uuid/v1'
import { dealResult } from "./common";

const tableName = 'category'

export default {
  Query: {
    category_list: async (...arg) => {
      const [, { CategoryInput }] = arg
      // language=MySQL
      const [res] = await asyncQuery(`
          select *
          from dw_server.category 
          where is_delete = 0
and parent_id = ?
      `, [CategoryInput?.parent_id ?? ''])
      console.log((res))
      return res
    }
  },
  Mutation: {
    addCategory: async (...arg) => {
      const [, { Category }] = arg
      if (!Category?.name) {
        throw Error('name not empty')
      }
      const id = uuidV1()
      // language=MySQL
      const sql = [`
          insert dw_server.category (id, name, update_time, parent_id, full_parent_id)
          values (?, ?, current_timestamp, ?, ?);
      `, [
        id,
        Category?.name,
        Category?.parentId ?? '',
        Category?.fullParentId ?? ''
      ]]
      const res = await asyncQuery(...sql)
      return dealResult(1, '', {
        category: { id }
      })
    }
  },
}
