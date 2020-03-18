import {Field, InputType} from "type-graphql"

@InputType()
export class DictInput {

  @Field()
  dictTypeCode: string

  @Field()
  isDisable: number | null

}
