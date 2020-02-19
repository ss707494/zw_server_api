import { genSaltSync, hashSync } from 'bcrypt'
import format from 'date-fns/format'
import { isDate } from 'lodash/lang'

export const dealPage = (obj) => {
  if (obj?.rows_per_page && obj?.page > -1) {
    return `limit ${obj?.page * obj?.rows_per_page},${(obj?.page + 1) * obj?.rows_per_page}`
  }
  return ''
}

const dealValueType = v => typeof v === 'string' ? `"${v}"`
    : isDate(v) ? `"${format(v, 'yyyy-MM-dd HH:mm:ss')}"`
    : v;

export const dealSet = (obj) => {
  return Object.keys(obj).filter(e => obj[e]).map(e => ` , ${e} = ${dealValueType(obj[e])} `).join('')
}

export const dealWhere = (obj, alias) => {
  return Object.keys(obj).map(e => (obj[e] === null || typeof obj[e] === 'undefined') ? '' : ` and ${alias ? `${alias}.` : ''}${e} = ${dealValueType(obj[e])} `).join('')
}

export const dealWhereLike = (obj, alias) => {
  return Object.keys(obj).map(e => (obj[e] === null || typeof obj[e] === 'undefined') ? '' : ` and ${alias ? `${alias}.` : ''}${e} like '%${obj[e]}%' `).join('')
}

export const dealOrder = (obj, init) => {
  return obj?.sort_type ? ` order by ${obj?.sort_type}` : init || ''
}

export const dealResult = (flag = 0, msg = '', data) => {
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
      await new Promise(r => setTimeout(r, 9000))
      return 'test:::'
    },
  },
  Mutation: {
  },
}
