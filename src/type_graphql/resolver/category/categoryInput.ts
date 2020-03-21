import {Field, InputType} from "type-graphql"
import {OrderByAndPageInput} from "../../types/input"

@InputType()
export class CategoryInput extends OrderByAndPageInput {

  @Field()
  categoryId: string | null

}
