import {asyncQuery} from "@/mysql";

export const getDataConfig = async (dataConfigInput: DataConfigInput) => {
  // language=MySQL
  const [res] = await asyncQuery(`
      select *
      from dw_server.data_config
      where is_delete = 0
      and type = ?
      order by id
  `, [dataConfigInput?.type])
  if (!res.length) {
    return {}
  }
  return res
}
