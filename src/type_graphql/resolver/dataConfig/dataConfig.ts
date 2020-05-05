import {Arg, Authorized, Mutation, Query, Resolver} from "type-graphql"
import {DataConfig} from "../../../entity/DataConfig"
import {getRepository, In} from "typeorm"
import {plainToClass} from "class-transformer"
import {DictTypeEnum, RelatedObjTypeEnum} from 'ss_common/enum'
import {PromoCode} from '../../../entity/PromoCode'

@Resolver()
export class DataConfigResolver {

  @Authorized('web_client')
  @Query(returns => DataConfig)
  async getDataConfig(@Arg('dataConfigInput', returns => DataConfig)dataConfigInput: DataConfig) {
    const res = await getRepository(DataConfig)
        .findOne({
          where: {
            type: dataConfigInput.type,
          },
        })
    return plainToClass(DataConfig, res)
  }

  @Authorized()
  @Mutation(returns => DataConfig)
  async saveDataConfig(@Arg('dataConfigInput', returns => DataConfig)dataConfigInput: DataConfig) {
    return await getRepository(DataConfig)
        .save(dataConfigInput)
  }

  @Authorized('web_client')
  @Query(returns => DataConfig)
  async homeCarouselImgs(@Arg('dataConfigInput', returns => DataConfig)dataConfigInput: DataConfig) {
    // 查询轮播图
    const value = dataConfigInput.value as any
    const helpObj = (value.list ?? []).reduce((acc, item) => {
      return Object.keys(RelatedObjTypeEnum).reduce((previousValue, currentValue) => {
        return {
          ...previousValue,
          [currentValue]: [
            ...(item.relatedObjType === currentValue ? [item.relatedObjId] : []),
            ...previousValue[currentValue],
          ],
        }
      }, acc)
    }, {
      [RelatedObjTypeEnum.PromoCode]: [],
      [RelatedObjTypeEnum.PromotionFlashSale]: [],
      [RelatedObjTypeEnum.PromotionThemeSelect]: [],
    })
    let imgList = []
    if (helpObj[RelatedObjTypeEnum.PromoCode].length) {
      imgList = [
        ...imgList,
        ...await getRepository(PromoCode).find({
          where: {
            id: In(helpObj[RelatedObjTypeEnum.PromoCode]),
          },
        }),
      ]
    }
    if (helpObj[RelatedObjTypeEnum.PromotionFlashSale].length) {
      const res = await getRepository(DataConfig)
          .findOne({
            where: {
              type: DictTypeEnum.PromotionFlashSale,
            },
          })
      imgList = [
        ...imgList,
        ...(res.value as any).list.filter(item => helpObj[RelatedObjTypeEnum.PromotionFlashSale].includes(item.id)),
      ]
    }
    if (helpObj[RelatedObjTypeEnum.PromotionThemeSelect].length) {
      const res = await getRepository(DataConfig)
          .findOne({
            where: {
              type: DictTypeEnum.PromotionThemeSelect,
            },
          })
      imgList = [
        ...imgList,
        ...(res.value as any).list.filter(item => helpObj[RelatedObjTypeEnum.PromotionThemeSelect].includes(item.id)),
      ]
    }

    console.log(value.list.map(v => ({
      ...v,
      imgUrl: imgList?.find(val => val.id === v.relatedObjId)?.imgUrl,
    })))

    // console.log(value.list)
    return {
      ...dataConfigInput,
      value: {
        ...value,
        list: value.list.map(v => ({
          ...v,
          imgUrl: imgList?.find(val => val.id === v.relatedObjId)?.imgUrl,
        })),
      },
    }
  }

}
