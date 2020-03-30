import {Arg, Query, Resolver} from 'type-graphql'
import {PromoCode} from '../../../entity/PromoCode'
import {getRepository, Like} from 'typeorm'

@Resolver()
export class PromoCodeResolver {

  @Query(returns => [PromoCode])
  promoCodeList(@Arg('promoCodeItemInput', returns => PromoCode)promoCodeItemInput: PromoCode) {
    return getRepository(PromoCode).find({
      where: {
        promoCodeType: promoCodeItemInput?.promoCodeType ?? Like('%%'),
        isDelete: 0,
      },
    })
  }

}
