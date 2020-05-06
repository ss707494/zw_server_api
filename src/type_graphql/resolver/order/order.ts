import {Arg, Authorized, Field, Float, Mutation, ObjectType, Query, Resolver} from "type-graphql"
import {OrderInfo} from "../../../entity/OrderInfo"
import {Between, FindOptions, getRepository, LessThan, Like, MoreThan, Not, Raw} from "typeorm"
import {OrderInput} from "./orderInput"
import {dealPageData} from "../../types/input"
import {dealPageResult, PageResult} from "../../types/types"
import {OrderState} from '../../../common/ss_common/enum'

@ObjectType()
export class OrderPage extends PageResult<OrderInfo> {
  @Field(returns => [OrderInfo])
  list: OrderInfo[]
}

const dealWhere = (orderInput: OrderInput): FindOptions<OrderInfo> => {
  return {
    where: {
      state: orderInput.state === 0 ? Not('') : orderInput.state,
      ...((!orderInput.startTime && !orderInput.endTime) ? {} : {
        finishTime: ((orderInput.startTime && orderInput.endTime) ? Between(orderInput.startTime, orderInput.endTime)
            : orderInput.startTime ? MoreThan(orderInput.startTime)
                : orderInput.endTime ? LessThan(orderInput.endTime)
                    : Raw('is null ')),
      }),
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
      pickUpType: Like(`%${orderInput.pickUpType}%`),
    },
  }
}

@Resolver()
export class OrderResolve {

  @Authorized()
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
            userPayCard: true,
          },
          ...dealPageData(orderInput),
        })
    return dealPageResult(res)
  }

  @Authorized()
  @Query(returns => Float)
  async orderListTotal(@Arg('orderInput')orderInput: OrderInput) {
    return await getRepository(OrderInfo)
        .count({
          ...dealWhere(orderInput).where,
        })
  }

  @Authorized()
  @Mutation(returns => [OrderInfo])
  async saveOrderList(@Arg('orderInfoItemInput', returns => [OrderInfo])orderInfoItemInput: OrderInfo[]) {
    return await getRepository(OrderInfo).save(orderInfoItemInput.map(value => ({
      ...value,
      ...(value.state === OrderState.PickedUp ? {
        pickUpTime: new Date(),
      } : {}),
      ...(value.state === OrderState.Finish ? {
        finishTime: new Date(),
      } : {}),
    })))
  }

}
