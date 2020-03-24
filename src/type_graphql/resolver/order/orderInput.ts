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
  userName: string | null

  @Field()
  registerName: string | null

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

  @Field({nullable: true})
  pickUpTime: Date | null

  @Field({nullable: true})
  pickUpType: string | null

}
