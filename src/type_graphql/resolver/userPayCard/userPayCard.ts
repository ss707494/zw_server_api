import {Arg, Authorized, Ctx, Mutation, Query, Resolver} from 'type-graphql'
import {ContextType} from '../../apploServer'
import {UserPayCard} from '../../../entity/UserPayCard'
import {getRepository} from 'typeorm'

@Resolver()
export class UserPayCardResolve {

  @Authorized()
  @Query(returns => [UserPayCard])
  async payCardListOneUser(@Ctx() {user}: ContextType) {
    return await getRepository(UserPayCard).find({
      where: {
        userId: user.id,
      },
    })
  }

  @Authorized()
  @Query(returns => UserPayCard)
  async userPayCard(@Arg('userPayCard', returns => UserPayCard) userPayCard: UserPayCard) {
    return await getRepository(UserPayCard).findOne({
      where: {
        id: userPayCard.id,
      },
    })
  }

  @Authorized()
  @Mutation(returns => UserPayCard)
  async saveUserPayCard(@Ctx() {user}: ContextType, @Arg('userPayCard', returns => UserPayCard) userPayCard: UserPayCard) {
    return await getRepository(UserPayCard).save({
      ...userPayCard,
      userId: user.id,
      user: {
        id: user.id,
      }
    })
  }

  @Authorized()
  @Mutation(returns => UserPayCard)
  async setUserPayCardDefault(@Arg('userPayCard', returns => UserPayCard) userPayCard: UserPayCard) {
    const rep = getRepository(UserPayCard)
    await rep.createQueryBuilder().update(UserPayCard).set({
      isDefault: 0,
    }).execute()
    return rep.save({
      id: userPayCard.id,
      isDefault: 1,
    })
  }

}
