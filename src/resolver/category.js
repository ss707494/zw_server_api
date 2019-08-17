import { asyncQuery } from "../mysql";
import uuidV1 from 'uuid/v1'
import { dealPage, dealResult, dealWhere, dealWhereLike } from "./common";

export default {
  Query: {
    category_list: async (...arg) => {
      const [, { CategoryInput }] = arg
      const [res] = await asyncQuery(`
          select id, name, create_time, update_time, is_delete, is_enable, remark, sort, parent_id, full_parent_id, number
          from dw_server.category
          where is_delete = 0
          ${dealWhere({
        parent_id: CategoryInput?.parent_id,
      })}
          ${dealWhereLike({
        full_parent_id: CategoryInput?.full_parent_id,
      })}
          ${dealPage(CategoryInput)}
      `, [])
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
        Category?.parent_id ?? '',
        Category?.full_parent_id ?? ''
      ]]
      const res = await asyncQuery(...sql)
      console.log(res)
      return dealResult(1, '', {
        category: {
          ...Category,
          id
        }
      })
    }
  },
}
