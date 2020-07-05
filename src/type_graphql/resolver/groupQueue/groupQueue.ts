import {Arg, Authorized, Ctx, Mutation, Query, Resolver} from 'type-graphql'
import {GroupQueue} from '../../../entity/GroupQueue'
import {getRepository} from 'typeorm'
import {OrderInfo} from "../../../entity/OrderInfo";
import {saveOrderInfoFun} from "../order/order";
import {ContextType} from "../../apploServer";
import {GroupOrder} from "../../../entity/GroupOrder";

@Resolver(of => GroupQueue)
export class GroupQueueResolver {

  @Authorized('web_client')
  @Query(returns => [GroupQueue])
  async groupQueueList(@Arg('groupQueueItemInput') groupQueueItemInput: GroupQueue) {
    return await getRepository(GroupQueue)
        .find({
          where: {
            product: {
              id: groupQueueItemInput.product?.id,
            },
          },
        })
  }

  @Authorized()
  @Mutation(returns => OrderInfo)
  async saveGroupOrder(@Arg('groupOrderItemInput') groupOrderItemInput: GroupOrder, @Arg('groupQueueItemInput') groupQueueItemInput: GroupQueue, @Arg('orderInfoItemInput', returns => OrderInfo)orderInfoItemInput: OrderInfo, @Ctx() {user}: ContextType) {
    const newOrder = await saveOrderInfoFun(orderInfoItemInput, user)
    const newGroupOrder = await getRepository(GroupOrder)
        .save({
          ...groupOrderItemInput,
          orderInfo: newOrder,
          user: user,
        })
    const newGroupQueue = await getRepository(GroupQueue)
        .save({
          ...groupQueueItemInput,
          groupOrder: {
            ...newGroupOrder,
          }
        })
    return newOrder
  }

}
