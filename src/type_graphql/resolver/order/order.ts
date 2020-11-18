import {Arg, Authorized, Ctx, Field, Float, Mutation, ObjectType, Query, Resolver} from 'type-graphql'
import {OrderInfo} from '../../../entity/OrderInfo'
import {Between, Equal, FindOptions, getRepository, In, IsNull, LessThan, Like, MoreThan, Not, Raw} from 'typeorm'
import {OrderInput} from './orderInput'
import {dealPageData} from '../../types/input'
import {dealPageResult, PageResult} from '../../types/types'
import {OrderState, PickUpTypeEnum} from '../../../common/ss_common/enum'
import {ContextType} from '../../apploServer'
import {getOrderNumber} from '../../../resolver/order'
import {ShopCart} from '../../../entity/ShopCart'
import {GroupOrder} from '../../../entity/GroupOrder'
import {ROrderProduct} from '../../../entity/ROrderProduct'
import {dealProductForDict} from '../product/product'

@ObjectType()
export class OrderPage extends PageResult<OrderInfo> {
  @Field(returns => [OrderInfo])
  list: OrderInfo[]
}

const dealWhereForOrder = (orderInput: OrderInput): FindOptions<OrderInfo> => {
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
        ...(orderInput.userId ? {id: Equal(orderInput.userId)} : {}),
      },
      userAddress: {
        ...((orderInput.zip && {
          zip: Like(`%${orderInput.zip}%`),
        }) || {}),
        ...((orderInput.city && {
          city: Like(`%${orderInput.city}%`),
        }) || {}),
        ...((orderInput.province && {
          province: Like(`%${orderInput.province}%`),
        }) || {}),
      },
      pickUpType: Like(`%${orderInput.pickUpType}%`),
    },
  }
}

export const saveOrderInfoFun: (orderInfoItemInput, user) => Promise<OrderInfo> = async (orderInfoItemInput: OrderInfo, user) => {
  const newOrderInfo = await getRepository(OrderInfo)
      .save({
        ...orderInfoItemInput,
        user: {
          id: user.id,
        },
        rOrderUser: {
          userId: user.id,
          user: {
            id: user.id,
          },
        },
        userPayCard: {
          id: orderInfoItemInput.paymentMethodCardId,
        },
        addressId: orderInfoItemInput.addressId,
        ...((
            orderInfoItemInput.pickUpType === PickUpTypeEnum.Self && {
              selfAddressId: orderInfoItemInput.addressId,
            }) || (
            orderInfoItemInput.pickUpType === PickUpTypeEnum.Delivery && {
              userAddress: {
                id: orderInfoItemInput.addressId,
              },
            }) || {}),
        ...((orderInfoItemInput.number && {}) || {
          number: getOrderNumber(user.id),
        }),
      })
  await getRepository(ROrderProduct)
      .save(orderInfoItemInput.rOrderProduct.map(v => ({
        ...v,
        orderId: newOrderInfo.id,
        orderInfo: newOrderInfo,
      })))
  return newOrderInfo
}

@Resolver()
export class OrderResolve {

  @Authorized()
  @Query(returns => OrderPage)
  async orderList(@Arg('orderInput')orderInput: OrderInput, @Arg('fromUser')fromUser: boolean, @Ctx() {user}: ContextType) {
    const res = await getRepository(OrderInfo)
        .findAndCount({
          where: {
            ...dealWhereForOrder({
              ...OrderInput.defautl(),
              ...fromUser ? {
                ...orderInput,
                userId: user?.id,
              } : orderInput,
            }).where,
            ...(orderInput.isGroup ? {
              groupOrder: {
                id: Not(IsNull()),
              },
            } : {
              id: Not(In((await getRepository(GroupOrder).find({relations: {orderInfo: true}})).map(v => v.orderInfo?.id ?? ''))),
            }),
          },
          relations: {
            groupOrder: true,
            user: {
              userInfo: true,
            },
            rOrderProduct: {
              product: {
                img: true,
              },
            },
            userAddress: true,
            userPayCard: true,
          },
          ...dealPageData(orderInput),
          order: {
            createTime: 'desc',
          },
        })
    return dealPageResult(res)
  }

  @Authorized()
  @Query(returns => Float)
  async orderListTotal(@Arg('orderInput')orderInput: OrderInput) {
    return await getRepository(OrderInfo)
        .count({
          where: {
            ...dealWhereForOrder(orderInput).where,
          },
        })
  }

  @Authorized()
  @Query(returns => OrderInfo)
  async orderDetail(@Arg('id')id: string) {
    const orderInfo = await getRepository(OrderInfo)
        .findOne({
          where: {
            id: Equal(id),
          },
          relations: {
            rOrderProduct: {
              product: {
                img: true,
              },
            },
            user: {
              userInfo: true,
            },
            userPayCard: true,
            userAddress: true,
          },
        })
    const helpProducts = await dealProductForDict(orderInfo?.rOrderProduct?.map(value => value.product))
    return {
      ...orderInfo,
      rOrderProduct: orderInfo?.rOrderProduct?.map(value => ({
        ...value,
        product: helpProducts.find(value1 => value1.id === value.product?.id)
      }))
    }
  }

  @Authorized()
  @Mutation(returns => [OrderInfo])
  async saveOrderList(@Arg('orderInfoItemInput', returns => [OrderInfo])orderInfoItemInput: OrderInfo[]) {
    return await getRepository(OrderInfo).save(orderInfoItemInput.map(value => ({
      ...value,
      updateTime: new Date(),
      ...(value.state === OrderState.PickedUp ? {
        pickUpTime: new Date(),
      } : {}),
      ...(value.state === OrderState.Finish ? {
        finishTime: new Date(),
      } : {}),
    })))
  }

  @Authorized()
  @Mutation(returns => OrderInfo)
  async saveOrder(@Arg('orderInfoItemInput', returns => OrderInfo)orderInfoItemInput: OrderInfo, @Ctx() {user}: ContextType) {
    const res = await saveOrderInfoFun(orderInfoItemInput, user)
    await getRepository(ShopCart).createQueryBuilder()
        .update(ShopCart).set({
          isDelete: 1,
        }).where({
          isNext: 0,
          user: {
            id: user.id,
          },
        }).execute()
    await getRepository(ShopCart).createQueryBuilder()
        .update(ShopCart).set({
          isNext: 0,
        }).where({
          user: {
            id: user.id,
          },
        }).execute()
    return res
  }

  @Authorized()
  @Mutation(returns => OrderInfo)
  async updateOrder(@Arg('orderInfoItemInput', returns => OrderInfo)orderInfoItemInput: OrderInfo) {
    return await getRepository(OrderInfo)
        .save({
          ...orderInfoItemInput,
        })
  }

}
