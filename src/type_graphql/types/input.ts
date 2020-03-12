import {Field, InputType} from "type-graphql"

//   page: model.page,
//   rows_per_page: model.rows_per_page,
@InputType()
export class PageInput {

  @Field()
  rows_per_page: number

  @Field()
  page: number

}
