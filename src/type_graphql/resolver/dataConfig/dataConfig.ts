import {Arg, Field, InputType, Mutation, Query, Resolver} from "type-graphql"
import {DataConfig} from "../../../entity/DataConfig"
import {getRepository} from "typeorm"
import {plainToClass} from "class-transformer"
import {JsonScalar} from "../../types/json"

@InputType()
export class DataConfigInput {

  @Field()
  id: string

  @Field()
  name: string | null

  @Field()
  createTime: Date | null

  @Field({nullable: true})
  updateTime: Date | null

  @Field()
  isDelete: number | null

  @Field()
  type: string

  @Field(returns => JsonScalar)
  value: object

  @Field()
  remark: string

}

@Resolver()
export class DataConfigResolver {

  @Query(returns => DataConfig)
  async getDataConfig(@Arg('dataConfigInput')dataConfigInput: DataConfigInput) {
    const res = await getRepository(DataConfig)
        .findOne({
          where: {
            type: dataConfigInput.type,
          },
        })
    return plainToClass(DataConfig, res)
  }

  @Mutation(returns => DataConfig)
  async saveDataConfig(@Arg('dataConfigInput')dataConfigInput: DataConfigInput) {
    return await getRepository(DataConfig)
        .save(dataConfigInput)
  }

}
