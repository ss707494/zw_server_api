import {asyncQuery} from "@/mysql";

export const getDetail = async (option) => {
  if (option?.id) {
    // language=MySQL
    const sql = `select id,
                        name,
                        create_time,
                        update_time,
                        is_delete,
                        is_enable,
                        remark,
                        sort,
                        parent_id,
                        full_parent_id,
                        number,
                        user_id,
                        img_url
                 from dw_server.category
                 where id = ?`
    const [res] = await asyncQuery(sql, [option.id])
    return res?.[0]
  }
  return {}
}
