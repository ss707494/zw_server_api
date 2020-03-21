import {Arg, Field, Float, ObjectType, Query, Resolver} from "type-graphql"
import {OrderInfo} from "../../../entity/OrderInfo"
import {Between, FindOptions, getRepository, LessThan, Like, MoreThan, Not} from "typeorm"
import {OrderInput} from "./orderInput"
import {dealPageData} from "../../types/input"
import {dealPageResult, PageResult} from "../../types/types"


@ObjectType()
export class OrderPage extends PageResult<OrderInfo> {
  @Field(returns => [OrderInfo])
  list: OrderInfo[]
}

const dealWhere = (orderInput: OrderInput): FindOptions<OrderInfo> => {
  return {
    where: {
      state: orderInput.state === 0 ? Not('') : orderInput.state,
      createTime: ((orderInput.startTime && orderInput.endTime) ? Between(orderInput.startTime, orderInput.endTime)
          : orderInput.startTime ? MoreThan(orderInput.startTime)
              : orderInput.endTime ? LessThan(orderInput.endTime)
                  : Not('')),
      number: Like(`%${orderInput.number}%`),
      user: {
        name: Like(`%${orderInput.registerName}%`),
        userInfo: {
          name: Like(`%${orderInput.userName}%`),
        },
      },
      userAddress: {
        zip: Like(`%${orderInput.zip}%`),
        city: Like(`%${orderInput.city}%`),
        province: Like(`%${orderInput.province}%`),
      },
      pickUpType: orderInput.pickUpType === 0 ? Not('') : orderInput.pickUpType,
    },
  }
}

@Resolver()
export class OrderResolve {

  @Query(returns => OrderPage)
  async orderList(@Arg('orderInput')orderInput: OrderInput) {
    const res = await getRepository(OrderInfo)
        .findAndCount({
          ...dealWhere(orderInput),
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
    return dealPageResult(res)
  }

  @Query(returns => Float)
  async orderListTotal(@Arg('orderInput')orderInput: OrderInput) {
    return await getRepository(OrderInfo)
        .count({
          ...dealWhere(orderInput).where,
        })
  }

}
