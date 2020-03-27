import {Arg, Mutation, Query, Resolver} from "type-graphql"
import {DataConfig} from "../../../entity/DataConfig"
import {getRepository} from "typeorm"
import {plainToClass} from "class-transformer"

@Resolver()
export class DataConfigResolver {

  @Query(returns => DataConfig)
  async getDataConfig(@Arg('dataConfigInput', returns => DataConfig)dataConfigInput: DataConfig) {
    const res = await getRepository(DataConfig)
        .findOne({
          where: {
            type: dataConfigInput.type,
          },
        })
    return plainToClass(DataConfig, res)
  }

  @Mutation(returns => DataConfig)
  async saveDataConfig(@Arg('dataConfigInput', returns => DataConfig)dataConfigInput: DataConfig) {
    return await getRepository(DataConfig)
        .save(dataConfigInput)
  }

}
