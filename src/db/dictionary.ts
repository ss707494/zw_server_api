import {asyncQuery} from "../mysql";
import uuidV1 from "uuid/v1";

export const getDictTypeList = async () => {
  // language=MySQL
  const [res] = await asyncQuery(`
      select id,
             name,
             create_time,
             update_time,
             is_delete,
             code,
             sort,
             parent_code,
             remark
      from dw_server.dict_type_first
      where is_delete = 0
      order by sort, id
  `, [])
  if (!res.length) {
    return {}
  }
  return res
}

export const getDictItem: ({}: DictionaryInput) => any = async (dictInput) => {
  // language=MySQL
  const sql = `
      select *
      from dw_server.dict
      where is_delete = 0
        and dict_type_code like ?
        and id like ?
      order by sort, id
  `
  const [res] = await asyncQuery(sql, [dictInput?.dict_type_code ?? '%%', dictInput?.id ?? '%%'])
  return res
}

export const addDictItem: ({}: DictionaryInput) => any = async (dictionaryInput) => {
  const _id = uuidV1()
  // language=MySQL
  const sql = `
      insert into dw_server.dict
          (id, name, update_time, dict_type_code, code, sort)
      values (?, ?, current_timestamp, ?, ?, ?)
  `
  const [res] = await asyncQuery(sql, [_id, dictionaryInput?.name, dictionaryInput?.dict_type_code, dictionaryInput?.code, dictionaryInput?.sort])
  return {
    ...res,
    id: _id,
  }
}

export const updateDictItem: ({}: DictionaryInput) => any = async (dictionaryInput) => {
  // language=MySQL
  const sql = `
      update dw_server.dict
      set name      = COALESCE(?, name),
          code      = COALESCE(?, code),
          sort      = COALESCE(?, sort),
          is_delete = COALESCE(?, is_delete),
          is_disable = COALESCE(?, is_disable)
      where id = ?
  `
  const [res] = await asyncQuery(sql, [
    dictionaryInput?.name, dictionaryInput?.code,
    dictionaryInput?.sort, dictionaryInput?.is_delete,
    dictionaryInput?.is_disable,
    dictionaryInput?.id])
  return {
    ...res,
    ...dictionaryInput,
  }
}
