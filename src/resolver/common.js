import { genSaltSync, hashSync } from 'bcrypt'
import { asyncQuery } from "../mysql";

export const dealPage = (obj) => {
  if (obj?.rows_per_page && obj?.page > -1) {
    return `limit ${obj?.page * obj?.rows_per_page},${(obj?.page + 1) * obj?.rows_per_page}`
  }
  return ''
}

const dealValueType = v => typeof v === 'string' ? `"${v}"` : v;

export const dealSet = (obj) => {
  return Object.keys(obj).filter(e => obj[e]).map(e => ` , ${e} = ${dealValueType(obj[e])} `).join('')
}

export const dealWhere = (obj, alias) => {
  // console.log(obj)
  return Object.keys(obj).map(e => (obj[e] === null || typeof obj[e] === 'undefined') ? '' : ` and ${alias ? `${alias}.` : ''}${e} = ${dealValueType(obj[e])} `).join('')
}

export const dealWhereLike = (obj, alias) => {
  return Object.keys(obj).map(e => (obj[e] === null || typeof obj[e] === 'undefined') ? '' : ` and ${alias ? `${alias}.` : ''}${e} like '%${obj[e]}%' `).join('')
}

export const dealOrder = (obj, init) => {
  return obj?.sort_type ? ` order by ${obj?.sort_type}` : init || ''
}

export const dealResult = (flag = 1, msg = '', data) => {
  return {
    flag,
    msg,
    ...data
  }
}

export default {
  Query: {
    getPassCode: async (...arg) => {
      const [, { pass }] = arg
      const hash = hashSync(pass, genSaltSync(10))
      console.log('getPassCode: ' + hash)
      return hash
    },
    test: async (...arg) => {
      console.log(arg)

      // // language=MySQL
      // const sql = mysql.format(`
      //     select *
      //     from dw_server.category
      //     where ?
      // `, [{ is_delete: 0 }])
      // console.log(sql)
      // language=MySQL
      const [res] = await asyncQuery(`
          select *
          from dw_server.category
          where ?
          ;
      `, [{ is_delete: 0 }])
      console.log(res)
      return ''
    },
  }
}
