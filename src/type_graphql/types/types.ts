import {Field, ObjectType} from "type-graphql"
import {plainToClass} from "class-transformer"


@ObjectType({ description: "page type" })
export class PageResult<T> {
  @Field()
  total: number
  list: T[]
  static setData<E>([list, total]: [E[], number]) {
    return plainToClass(PageResult, {
      total,
      list,
    })
  }
}

