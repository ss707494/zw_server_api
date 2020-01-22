import {dealResult} from "@/resolver/common";
import {getDataConfig, setDataConfig} from "@/db/configData";

export default {
  Query: {
    data_config: async (...arg) => {
      const [, {dataConfigInput}, {}] = arg
      const res = await getDataConfig(dataConfigInput)
      if (!res?.[0].value) return {}
      return {
        ...res?.[0],
      }
    }
  },
  Mutation: {
    set_data_config: async (...arg) => {
      const [, {dataConfigInput}, {}] = arg
      const res = await setDataConfig({
        ...dataConfigInput,
      })
      return dealResult(res?.affectedRows, '', {
        dataConfig: {
          id: dataConfigInput?.id
        }
      })
    }
  }
}
