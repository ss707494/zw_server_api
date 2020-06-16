import {Arg, Authorized, Field, ObjectType, Query, Resolver} from 'type-graphql'
import {Product} from '../../../entity/Product'
import {dealPageResult, PageResult} from '../../types/types'
import {getRepository, In} from 'typeorm'
import {commonQueryWhere} from '../../common/query'
import {dealOrderBy, OrderByInput} from '../../types/input'
import {Dict} from '../../../entity/Dict'

@ObjectType()
class ProductPage extends PageResult<Product> {
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
            category: {
              id: categoryInput.category.id,
            },
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
