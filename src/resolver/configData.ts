import {dealResult} from "@/resolver/common";
import {getDataConfig} from "@/db/configData";

export default {
  Query: {
    data_config: async (...arg) => {
      const [, {dataConfigInput}, {}] = arg
      return (await getDataConfig(dataConfigInput))[0]
    }
  },
  Mutation: {}
}
