import {Arg, Mutation, Query, Resolver} from "type-graphql"
import {DictTypeFirst} from "../../../entity/DictTypeFirst"
import {getRepository} from "typeorm"
import {plainToClass} from "class-transformer"
import {Dict} from "../../../entity/Dict"
import {DictInput} from "./dictInput"

@Resolver()
export class DictResolver {

  @Mutation(returns => [DictTypeFirst])
  async saveDictTypeFirst(@Arg('dictTypeFirstItemInput', returns => [DictTypeFirst])dictTypeFirstItemInput: DictTypeFirst[]) {
    return await getRepository(DictTypeFirst).save(dictTypeFirstItemInput)
  }

  @Query(returns => [DictTypeFirst])
  async getDictTypeList() {
    const res = await getRepository(DictTypeFirst)
        .find({
          where: {
            isDelete: 0,
          },
        })
    return plainToClass(DictTypeFirst, res)
  }

  @Query(returns => [Dict])
  async getDictList(@Arg('dictInput')dictInput: DictInput) {
    const res = await getRepository(Dict)
        .find({
          where: {
            ...dictInput,
            isDelete: 0,
          },
        })
    return plainToClass(Dict, res)
  }

}
