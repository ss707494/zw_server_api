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

  @Field({defaultValue: 10})
  rows_per_page: number

  @Field({defaultValue: 0})
  page: number

}

export const dealOrderBy = (orderByInput: OrderByInput) => {
  return orderByInput.orderByObject.reduce((previousValue, currentValue) => ({
    ...previousValue,
    [currentValue[0]]: currentValue[1],
  }), {})
}

@InputType()
export class OrderByInput {

  @Field(returns => [[String]])
  orderByObject: string[][]

}

@InputType()
export class OrderByAndPageInput extends PageInput {

  @Field(returns => [[String]])
  orderByObject: string[][] = []

}

@InputType()
export class UserListInput extends PageInput {

  @Field({nullable: true})
  name?: string = ''

  @Field({nullable: true})
  phone?: string = ''

  @Field({nullable: true})
  email?: string = ''

  @Field()
  registerName: string = ''

}

