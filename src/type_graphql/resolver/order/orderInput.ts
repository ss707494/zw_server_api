import {PageInput} from "../../types/input"
import {Field, InputType} from "type-graphql"

@InputType()
export class OrderInput extends PageInput {

  @Field()
  startTime: Date | null

  @Field()
  endTime: Date | null

  @Field()
  number: string

  @Field()
  state: number | null

  @Field()
  userName: string

  @Field()
  zip: string | null;

  @Field()
  province: string | null;

  @Field()
  city: string | null;

  @Field()
  district: string | null;

  @Field()
  address: string | null;

}
