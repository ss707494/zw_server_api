import {Arg, Authorized, Ctx, Mutation, Query, Resolver} from 'type-graphql'
import {ContextType} from '../../apploServer'
import {getRepository} from 'typeorm'
import {UserAddress} from '../../../entity/UserAddress'

@Resolver()
export class UserAddressResolve {

  @Authorized()
  @Query(returns => [UserAddress])
  async userAddressListOneUser(@Ctx() {user}: ContextType) {
    return await getRepository(UserAddress).find({
      where: {
        userId: user.id,
      },
      order: {
        isDefault: 'desc',
        updateTime: 'desc',
      },
    })
  }

  @Authorized()
  @Query(returns => UserAddress)
  async userAddress(@Arg('userAddress', returns => UserAddress) userAddress: UserAddress) {
    return await getRepository(UserAddress).findOne({
      where: {
        id: userAddress.id,
      },
    })
  }

  @Authorized()
  @Mutation(returns => UserAddress)
  async saveUserAddress(@Ctx() {user}: ContextType, @Arg('userAddress', returns => UserAddress) userAddress: UserAddress) {
    return await getRepository(UserAddress).save({
      ...userAddress,
      userId: user.id,
      user: {
        id: user.id,
      }
    })
  }

  @Authorized()
  @Mutation(returns => UserAddress)
  async setUserAddressDefault(@Arg('userAddress', returns => UserAddress) userAddress: UserAddress) {
    const rep = getRepository(UserAddress)
    await rep.createQueryBuilder().update(UserAddress).set({
      isDefault: 0,
    }).execute()
    return rep.save({
      id: userAddress.id,
      isDefault: 1,
    })
  }

}
