import {Arg, Authorized, Ctx, Query, Resolver} from 'type-graphql'
import {GroupOrder} from '../../../entity/GroupOrder'
import {OrderInput} from '../order/orderInput'
import {ContextType} from '../../apploServer'

@Resolver(of => GroupOrder)
export class GroupOrderResolver {

  @Authorized()
  @Query()
  async groupOrderList(@Arg('orderInput')orderInput: OrderInput, @Arg('fromUser')fromUser: boolean, @Ctx() {user}: ContextType) {

  }

}
