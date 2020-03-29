import { asyncQuery } from "../mysql";
import uuidV1 from 'uuid/v1'
import { dealOrder, dealPage, dealResult, dealSet, dealWhere, dealWhereLike } from "./common";
import { getDetail } from '../db/category'

export default {
  Category: {
    parent_data: async (item) => {
      if (item?.parent_id && item?.parent_id !== 'root') {
        return getDetail({
          id: item?.parent_id,
        })
      }
      return {}
    },
  },
  Query: {
    category_total: async (...arg) => {
      const [, { CategoryInput }] = arg
      // language=MySQL
      const [res] = await asyncQuery(`
          select count(id) as num
          from dw_server.category
          where is_delete = 0 
          and id != 'root'
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
      // language=MySQL
      const [res] = await asyncQuery(`
select 
       c1.img_url,
       c1.parent_id,
       c1.number,
       c1.id,
       c1.name,
       c1.create_time,
       c1.is_enable,
       c1.remark,
       c1.sort,
       c2.id   as c2_id,
       c2.name as c2_name,
       c3.id   as c3_id,
       c3.name as c3_name,
       p2.name as p2_name,
       p2.id   as p2_id,
       p2.number as p2_num,
       p3.id   as p3_id,
       p3.number as p3_num,
       p3.name as p3_name
from dw_server.category c1
         left join dw_server.category c2 on c1.id = c2.parent_id
         left join dw_server.category c3 on c2.id = c3.parent_id
         left join dw_server.category p2 on c1.parent_id = p2.id and p2.id != 'root' 
         left join dw_server.category p3 on p2.parent_id = p3.id and p3.id != 'root'
where c1.is_delete = 0 and c1.id != 'root'
          ${dealWhere({
            parent_id: CategoryInput?.parent_id,
          }, 'c1')}
          ${CategoryInput?.full_parent_id ? `and (p2.id = '${CategoryInput?.full_parent_id}' or p3.id = '${CategoryInput?.full_parent_id}') ` : ''}
group by c1.id
          ${dealOrder(CategoryInput)}
          ${dealPage(CategoryInput)}
      `, [])
      return res
    },
    async category_origin (...arg) {
      const [, { id }] = arg
      // language=MySQL
      const sql = `
          select 
                 c1.id, c1.number as number,
                 c2.id   as c2_id,
                 c2.name as c2_name,
                 c2.number as c2_number,
                 c3.id   as c3_id,
                 c3.name as c3_name,
                 c3.number as c3_number
          from dw_server.category c1
                   left join dw_server.category c2 on c1.parent_id = c2.id
                   left join dw_server.category c3 on c2.parent_id = c3.id
          where c1.is_delete = 0
${dealWhere({id}, 'c1')}
      `
      const [res] =await asyncQuery(sql)

      return res?.[0]??{}
    }
  },
  Mutation: {
    save_category: async (...arg) => {
      const [, { Category }] = arg
      // console.log(Category)
      if (Category?.id) {
        // language=MySQL
        const sql = [`
            update dw_server.category
            set update_time = current_timestamp
${dealSet({
          name: Category?.name,
          full_parent_id: Category?.full_parent_id,
          parent_id: Category?.parent_id,
          img_url: Category?.img_url,
          is_enable: Category?.is_enable,
})}
where 1 = 1
      ${dealWhere({
          id: Category?.id
        })}
        `, [
          Category?.name,
          Category?.parent_id ?? '',
          Category?.full_parent_id ?? '',
          Category?.img_url ?? '',
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
            insert dw_server.category (id, name, update_time, parent_id, full_parent_id, number)
            values (?, ?, current_timestamp, ?, ?, ifnull((select 1 + max(c.number) from dw_server.category c where c.parent_id = ?), 1));
        `, [
          id,
          Category?.name,
          Category?.parent_id ?? '',
          Category?.full_parent_id ?? '',
          Category?.parent_id ?? '',
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
