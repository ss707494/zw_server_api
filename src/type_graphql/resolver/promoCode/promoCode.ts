import {Arg, Authorized, Ctx, Query, Resolver} from 'type-graphql'
import {PromoCode} from '../../../entity/PromoCode'
import {getRepository, Like} from 'typeorm'
import {ContextType} from '../../apploServer'
import {MoreThanOrEqual, Raw} from 'typeorm/index'
import {Dict} from '../../../entity/Dict'
import {DictTypeEnum, PromoCodeTypeEnum} from '../../../common/ss_common/enum'
import {User} from '../../../entity/User'

@Resolver()
export class PromoCodeResolver {

  @Authorized()
  @Query(returns => [PromoCode])
  async promoCodeList(@Arg('promoCodeItemInput', returns => PromoCode)promoCodeItemInput: PromoCode, @Ctx() {user}: ContextType) {
    if (promoCodeItemInput?.promoCodeType) {
      return getRepository(PromoCode).find({
        where: {
          ...(promoCodeItemInput?.title && {
            title: Like(`%${promoCodeItemInput?.title}%`),
          } || {}),
          promoCodeType: promoCodeItemInput?.promoCodeType ?? Like('%%'),
          code: promoCodeItemInput?.code,
          isDelete: 0,
          effectiveDateStart: Raw(alias =>`${alias} < NOW()`),
          effectiveDateEnd: Raw(alias =>`${alias} > NOW()`),
        },
        relations: {
          userLevel: true
        },
      })
    } else {
      const userRes = await getRepository(User).findOne({
        where: {
          id: (user.id),
        },
        relations: {
          userInfo: true,
        },
      })
      const userLevelDict = await getRepository(Dict)
          .findOne({
            where: {
              dictTypeCode: DictTypeEnum.UserLevel,
              code: userRes.userInfo.userLevel,
            },
          })

      return [
          ...await getRepository(PromoCode).find({
            where: {
              ...(promoCodeItemInput?.title && {
                title: Like(`%${promoCodeItemInput?.title}%`),
              } || {}),
              promoCodeType: PromoCodeTypeEnum.PromoCode,
              code: promoCodeItemInput?.code,
              isDelete: 0,
              effectiveDateStart: Raw(alias =>`${alias} < NOW()`),
              effectiveDateEnd: Raw(alias =>`${alias} > NOW()`),
            },
            relations: {
              userLevel: true
            },
          }),
        ...await getRepository(PromoCode).find({
          where: {
            userLevel: {
              sort: MoreThanOrEqual(userLevelDict.sort),
            },
            ...(promoCodeItemInput?.title && {
              title: Like(`%${promoCodeItemInput?.title}%`),
            } || {}),
            promoCodeType: PromoCodeTypeEnum.DarenCard,
            code: promoCodeItemInput?.code,
            isDelete: 0,
            effectiveDateStart: Raw(alias =>`${alias} < NOW()`),
            effectiveDateEnd: Raw(alias =>`${alias} > NOW()`),
          },
          relations: {
            userLevel: true
          },
        }),
      ]
    }
  }

}
