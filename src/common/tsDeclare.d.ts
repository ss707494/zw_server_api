declare interface DictionaryInput {
  id: string,
  name: string,
  create_time: string,
  update_time: string,
  is_delete: number,
  is_disable: number,
  code: string,
  dict_type_code: string,
  sort: number,
  remark: string,

}

declare type DataConfigInput = {
  id: string,
  name: string,
  create_time: string,
  update_time: string,
  is_delete: number,

  type: string,
  value: any,
  remark: string,

}
