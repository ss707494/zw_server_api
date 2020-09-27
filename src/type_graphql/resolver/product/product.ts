import {Arg, Authorized, Field, ObjectType, Query, Resolver} from 'type-graphql'
import {Product} from '../../../entity/Product'
import {dealPageResult, PageResult} from '../../types/types'
import {getRepository, In} from 'typeorm'
import {commonQueryWhere} from '../../common/query'
import {dealOrderBy, OrderByInput} from '../../types/input'
import {Dict} from '../../../entity/Dict'
import {getConnection, Like} from 'typeorm'
import {ROrderProduct} from '../../../entity/ROrderProduct'
import {SaleRankTypeEnum} from '../../../common/ss_common/enum'
import {startOfDay, startOfMonth, startOfWeek} from 'date-fns'
import {sqlDateFormat} from '../../../common/date'

@ObjectType()
export class ProductPage extends PageResult<Product> {
  @Field(returns => [Product])
  list: Product[]
}

@Resolver(of => Product)
export class ProductResolver {

  @Authorized('web_client')
  @Query(returns => ProductPage)
  async productList(@Arg('productInput', returns => Product) categoryInput: Product, @Arg('orderByInput')orderByInput: OrderByInput) {
    const res = await getRepository(Product)
        .findAndCount({
          relations: {
            img: true,
          },
          where: {
            ...commonQueryWhere,
            isEnable: 1,
            ...(categoryInput.category?.id && {
              category: {
                id: categoryInput.category?.id,
              },
            } || {}),
            ...(categoryInput.name && {
              name: Like(`%${categoryInput.name}%`),
            } || {}),
            isGroup: categoryInput.isGroup ?? 0,
          },
          order: dealOrderBy(orderByInput),
        })
    return dealPageResult(res)
  }

  @Authorized('web_client')
  @Query(returns => ProductPage)
  async productListByIds(@Arg('ids', returns => [String]) ids: string[]) {
    if (ids.length === 0) return []
    const res = await getRepository(Product)
        .findAndCount({
          relations: {
            img: true,
          },
          where: {
            ...commonQueryWhere,
            isEnable: 1,
            id: In(ids),
          },
        })
    return dealPageResult([await dealProductForDict(res[0]), res[1]])
  }

  @Authorized('web_client')
  @Query(returns => ProductPage)
  async productListOrderByOrder(@Arg('orderByType')orderByType: string, @Arg('productInput', returns => Product) productInput?: Product) {
    const qb = await getConnection().createQueryBuilder()

    const dateQuery =
        orderByType === SaleRankTypeEnum.OneDay && `'${sqlDateFormat(startOfDay(new Date()))}' and '${sqlDateFormat(new Date())}'`
        || orderByType === SaleRankTypeEnum.OneWeek && `'${sqlDateFormat(startOfWeek(new Date()))}' and '${sqlDateFormat(new Date())}'`
        || orderByType === SaleRankTypeEnum.OneMonth && `'${sqlDateFormat(startOfMonth(new Date()))}' and '${sqlDateFormat(new Date())}'`
        || ''
    const query = await qb
        .select('product')
        .addSelect('leftOrder.sumOrder', 'sumOrder')
        .from(Product, 'product')
        .where('product.isGroup = :isGroup', {isGroup: productInput?.isGroup ?? 0})
        .andWhere('product.isDelete = :isDelete', {isDelete: 0})
        .andWhere('product.isEnable = :isEnable', {isEnable: 1})
        .leftJoinAndSelect('product.rOrderProduct', 'rOrderProduct')
        .leftJoinAndSelect('rOrderProduct.orderInfo', 'orderInfo')
        .leftJoinAndSelect('product.img', 'img')
        .leftJoin(db => {
          return db
              .select('subProduct.id', 'id')
              .addSelect('COUNT(`rOrderProduct`.`id`)', 'sumOrder')
              .from(Product, 'subProduct')
              .leftJoin(db => db
                      .select('rOrderProduct.id', 'id')
                      .addSelect('rOrderProduct.productId', 'productId')
                      .from(ROrderProduct, 'rOrderProduct')
                      .where(`${dateQuery ? `rOrderProduct.create_time between ${dateQuery}` : ''}`)
                  , 'rOrderProduct', 'rOrderProduct.productId = subProduct.id')
              .groupBy('subProduct.id')
        }, 'leftOrder', 'leftOrder.id = product.id')
        .orderBy('sumOrder', 'DESC')
        .addOrderBy('product.create_time')
    const rawList = await query.getRawMany()
    // console.log(list.map(v => ({
    //   sumOrder: v.sumOrder,
    //   product_name: v.product_name,
    // })))
    const res = await query.getManyAndCount()

    return dealPageResult([
      res[0].map(v => ({
        ...v,
        sumOrder: rawList?.find(value => value.product_id === v.id)?.sumOrder,
      })),
      res[1],
    ])
  }
}

export const dealProductForDict = async (products: Product[]) => {
  const res = await getRepository(Dict)
      .find({
        where: {
          dictTypeCode: In(['UnpackingUnit', 'WeightUnit', 'PackingUnit', 'GroupPrecision']),
          isDelete: 0,
        },
      })
  return products.map(value => ({
    ...value,
    unitString: res?.find(value1 => (value1.code === value.unit && value1.dictTypeCode === 'WeightUnit'))?.name,
    packingUnitString: res?.find(value1 => (value1.code === value.packingUnit && value1.dictTypeCode === 'PackingUnit'))?.name,
    groupAmountUnitString: res?.find(value1 => (value1.code === value.groupAmountUnit && value1.dictTypeCode === 'UnpackingUnit'))?.name,
    groupPrecisionString: res?.find(value1 => (value1.code === `${value.groupPrecision}` && value1.dictTypeCode === 'GroupPrecision'))?.name,
  }))
}
