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
            ...commonQueryWhere,
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
      updateTime: new Date(),
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
      number: updateNum ?? 1,
      updateTime: new Date(),
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

  @Authorized('web_client')
  @Query(returns => [ShopCart])
  async shopCartList(@Ctx() {user}: ContextType) {
    if (!user?.id) return []
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
              category: {
                parentCategory: {
                  parentCategory: true,
                },
              },
              img: true,
            },
          },
          order: {
            updateTime: 'desc',
          },
        })
  }

}
