import { genSaltSync, hashSync } from 'bcrypt'

export const dealPage = (obj) => {
  if (obj?.rows_per_page && obj?.page > -1) {
    return `limit ${obj?.page * obj?.rows_per_page},${(obj?.page + 1) * obj?.rows_per_page}`
  }
  return ''
}

export const dealWhere = (obj, alias) => {
  console.log(obj)
  return Object.keys(obj).map(e => (obj[e] === null || typeof obj[e] === 'undefined') ? '' : ` and ${alias ? `${alias}.` : ''}${e} = '${obj[e]}' `).join()
}

export const dealWhereLike = (obj) => {
  return Object.keys(obj).map(e => (obj[e] === null || typeof obj[e] === 'undefined') ? '' : ` and ${e} like '%${obj[e]}%' `).join()
}

export const dealOrder = (str) => {
  return str ? ` order by ${str}` : ''
}

export const dealResult = (flag, msg, data) => {
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
  }
}
