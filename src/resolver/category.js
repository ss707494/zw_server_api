import { asyncQuery } from "../mysql";
import uuidV1 from 'uuid/v1'
import { dealOrder, dealPage, dealResult, dealWhere, dealWhereLike } from "./common";

export default {
  Query: {
    category_total: async (...arg) => {
      const [, { CategoryInput }] = arg
      // language=MySQL
      const [res] = await asyncQuery(`
          select count(id) as num
          from dw_server.category
          where is_delete = 0
          ${dealWhere({
        parent_id: CategoryInput?.parent_id,
      })}
          ${dealWhereLike({
        full_parent_id: CategoryInput?.full_parent_id,
      })}
      `)
      return res?.[0]?.num ?? 0
    },
    category_list: async (...arg) => {
      const [, { CategoryInput }] = arg
      const [res] = await asyncQuery(`
select
      c1.parent_id, c1.number, c1.id, c1.name, c1.create_time, c1.is_enable, c1.remark, c1.sort, c2.id as c2_id, c2.name as c2_name, c3.id as c3_id, c3.name as c3_name
from dw_server.category c1
         left join dw_server.category c2 on c1.parent_id = c2.id
         left join dw_server.category c3 on c2.parent_id = c3.id
          where c1.is_delete = 0
          ${dealWhere({
            parent_id: CategoryInput?.parent_id,
          }, 'c1')}
          ${CategoryInput?.full_parent_id ? `and (c2.id = '${CategoryInput?.full_parent_id}' or c3.id = '${CategoryInput?.full_parent_id}') ` : ''}
          ${dealOrder(CategoryInput?.sort_type)}
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
    },
    save_category: async (...arg) => {
      const [, { Category }] = arg
      if (!Category?.name) {
        throw Error('name not empty')
      }
      console.log(Category)
      if (Category?.id) {
        // language=MySQL
        const sql = [`
            update dw_server.category
            set name           = ?,
                parent_id      = ?,
                full_parent_id = ?,
                update_time    = current_timestamp
            where id = ?
        `, [
          Category?.name,
          Category?.parent_id ?? '',
          Category?.full_parent_id ?? '',
          Category?.id,
        ]]
        const res = await asyncQuery(...sql)
        console.log(res)
        return dealResult(1, '', {
          category: {
            ...Category
          }
        })
      } else {
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
    }
  },
}
