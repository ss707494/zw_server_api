import {Arg, Authorized, Ctx, Mutation, Query, Resolver} from 'type-graphql'
import {ShopCart} from '../../../entity/ShopCart'
import {getRepository} from 'typeorm'
import {ContextType} from '../../apploServer'
import {commonQueryWhere} from '../../common/query'

@Resolver(of => ShopCart)
export class ShopCartResolver {

  @Authorized()
  @Mutation(returns => ShopCart)
  async updateNumShopCart(@Ctx() {user}: ContextType, @Arg('shopCart')shopCart: ShopCart, @Arg('updateNum', {nullable: true, defaultValue: 1})updateNum: number) {
    const shopCartRepository = await getRepository(ShopCart)
    const one = await shopCartRepository
        .findOne({
          where: {
            product: {
              id: shopCart.product?.id,
            },
            user: {
              id: user?.id,
            },
            isNext: 0,
          },
        })
    return shopCartRepository.save((one?.id && {
      ...one,
      number: one.number + updateNum,
    }) || ({
      product: {
        id: shopCart.product?.id,
      },
      productId: shopCart.product?.id,
      user: {
        id: user.id,
      },
      userId: user.id,
      number: 1,
    }))
  }

  @Authorized()
  @Mutation(returns => ShopCart)
  async updateShopCart(@Ctx() {user}: ContextType, @Arg('shopCart')shopCart: ShopCart) {
    return await getRepository(ShopCart)
        .save({
          ...shopCart,
          updateTime: new Date(),
        })
  }

  @Authorized()
  @Query(returns => [ShopCart])
  async shopCartList(@Ctx() {user}: ContextType) {
    return await getRepository(ShopCart)
        .find({
          where: {
            ...commonQueryWhere,
            user: {
              id: user.id,
            },
          },
          relations: {
            product: {
              img: true,
            },
          },
        })
  }

}
