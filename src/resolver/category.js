import { asyncQuery } from "../mysql";

const tableName = 'category'

export default {
  Mutation: {
    addCategory: async (...arg) => {
      const [, { Category }] = arg
      if (!Category?.name) {
        throw Error('name not empty')
      }
      // language=MySQL
      const sql = `
          insert category (id, name, update_time, parent_id, full_parent_id)
          values (uuid(), ?, current_timestamp, ?, ?)
      `
      const res = await asyncQuery(sql, [
          Category?.name,
          Category?.parentId,
          Category?.fullParentId
      ])
      return JSON.stringify(res)
    }
  },
}
