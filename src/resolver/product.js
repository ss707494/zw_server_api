import { asyncQuery } from '../mysql'
import uuidV1 from 'uuid/v1'
import { dealOrder, dealPage, dealResult, dealSet, dealWhere } from './common'

export default {
  Query: {
    product_list: async (...arg) => {
      const [, { ListInput }] = arg
      // language=MySQL
      const sql = `
select id, name, create_time, update_time, is_delete, remark, is_hot, is_new, stock, unit, weight, price_in, price_out, price_market, brand, number
from dw_server.product p
where is_delete = 0
${dealWhere({
        name: ListInput?.name,
        number: ListInput?.number,
})}
${dealOrder(ListInput)}
${dealPage(ListInput)}
      `
      const [res] = await asyncQuery(sql)
      return res
    }
  },
  Mutation: {
    save_product: async (...arg) => {
      const [, { ProductInput }] = arg
      if (!ProductInput?.name) {
        throw Error('name not empty')
      }
      if (ProductInput?.id) {

      } else {
        const id = uuidV1()
        // language=MySQL
        const sql = `
insert into dw_server.product
set update_time = current_timestamp,
    id = "${id}", 
    ${dealSet(ProductInput)}
        `
        const res = await asyncQuery(sql)
        console.log(res)
        return dealResult(1, '', {
          product: {
            ...ProductInput,
            id
          }
        })

      }

    }
  },
}
