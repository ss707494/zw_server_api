import {Arg, Authorized, Field, Query, Resolver, ObjectType} from 'type-graphql'
import {Product} from '../../../entity/Product'
import {dealPageResult, PageResult} from '../../types/types'
import {getRepository, In} from 'typeorm'
import {commonQueryWhere} from '../../common/query'
import {dealOrderBy, OrderByInput} from '../../types/input'

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
    return dealPageResult(res)
  }

}
