import {Arg, Authorized, Query, Resolver} from 'type-graphql'
import {GroupQueue} from '../../../entity/GroupQueue'
import {getRepository} from 'typeorm'

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

}
