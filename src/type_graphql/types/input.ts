import {Field, InputType} from "type-graphql"

//   page: model.page,
//   rows_per_page: model.rows_per_page,
export const dealPageData = (pageInput: object & PageInput) => {
  return {
    take: pageInput.rows_per_page,
    skip: pageInput.page * pageInput.rows_per_page,
  }
}

@InputType()
export class PageInput {

  @Field()
  rows_per_page: number

  @Field()
  page: number

}

@InputType()
export class UserListInput extends PageInput {

  @Field({nullable: true})
  name?: string = ''

  @Field({nullable: true})
  phone?: string = ''

  @Field({nullable: true})
  email?: string = ''

}

