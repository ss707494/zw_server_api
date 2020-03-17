import {Arg, Field, ObjectType, Query, Resolver} from "type-graphql"
import {OrderInfo} from "../../../entity/OrderInfo"
import {getRepository} from "typeorm"
import {OrderInput} from "./orderInput"
import {dealPageData} from "../../types/input"
import {PageResult} from "../../types/types"

@ObjectType()
export class OrderPage extends PageResult<OrderInfo> {
  @Field(returns => [OrderInfo])
  list: OrderInfo[]
}

@Resolver()
export class OrderResolve {

  @Query(returns => OrderPage)
  async orderList(@Arg('orderInput')orderInput: OrderInput) {
    const res = await getRepository(OrderInfo)
        .findAndCount({
          relations: {
            user: {
              userInfo: true,
            },
            rOrderProduct: {
              product: true,
            },
            userAddress: true,
          },
          ...dealPageData(orderInput),
        })
    return PageResult.setData<OrderInfo>(res)
  }

}
