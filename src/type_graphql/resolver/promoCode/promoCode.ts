import {Arg, Authorized, Query, Resolver} from 'type-graphql'
import {PromoCode} from '../../../entity/PromoCode'
import {getRepository, Like} from 'typeorm'

@Resolver()
export class PromoCodeResolver {

  @Authorized('web_client')
  @Query(returns => [PromoCode])
  promoCodeList(@Arg('promoCodeItemInput', returns => PromoCode)promoCodeItemInput: PromoCode) {
    return getRepository(PromoCode).find({
      where: {
        ...(promoCodeItemInput?.title && {
          title: Like(`%${promoCodeItemInput?.title}%`),
        } || {}),
        promoCodeType: promoCodeItemInput?.promoCodeType ?? Like('%%'),
        code: promoCodeItemInput?.code,
        isDelete: 0,
      },
    })
  }

}
