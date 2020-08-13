import {Arg, Authorized, Ctx, Mutation, Query, Resolver} from 'type-graphql'
import {GroupQueue} from '../../../entity/GroupQueue'
import {getRepository} from 'typeorm'
import {OrderInfo} from '../../../entity/OrderInfo'
import {saveOrderInfoFun} from '../order/order'
import {ContextType} from '../../apploServer'
import {GroupOrder} from '../../../entity/GroupOrder'
import {commonQueryWhere} from '../../common/query'

@Resolver(of => GroupQueue)
export class GroupQueueResolver {

  @Authorized('web_client')
  @Query(returns => [GroupQueue])
  async groupQueueList(@Arg('groupQueueItemInput') groupQueueItemInput: GroupQueue) {
    return await getRepository(GroupQueue)
        .find({
          where: {
            product: {
              ...commonQueryWhere,
              isEnable: 1,
              ...(groupQueueItemInput?.product?.id ? {
                id: groupQueueItemInput.product?.id,
              } : {}),
            },
          },
          relations: {
            product: {
              img: true,
            },
            groupOrder: true,
          },
        })
  }

  @Authorized()
  @Mutation(returns => OrderInfo)
  async saveGroupOrder(@Arg('groupOrderItemInput') groupOrderItemInput: GroupOrder, @Arg('groupQueueItemInput') groupQueueItemInput: GroupQueue, @Arg('orderInfoItemInput', returns => OrderInfo)orderInfoItemInput: OrderInfo, @Ctx() {user}: ContextType) {
    const newOrder = await saveOrderInfoFun(orderInfoItemInput, user)
    const newGroupQueue = await getRepository(GroupQueue)
        .save({
          productId: groupQueueItemInput.product.id,
          ...groupQueueItemInput,
        })

    await getRepository(GroupOrder)
        .save({
          ...groupOrderItemInput,
          orderInfo: newOrder,
          orderId: newOrder.id,
          user: user,
          userId: user.id,
          groupQueueId: newGroupQueue.id,
          groupQueue: {
            ...newGroupQueue,
          },
        })
    // await getRepository(GroupOrder)
    //     .save({
    //       id: newGroupOrder.id,
    //       groupQueueId: newGroupQueue.id,
    //     })
    return newOrder
  }

}
