import {Arg, Authorized, Field, InputType, Mutation, ObjectType, Query, Resolver} from "type-graphql"
import {Category} from "../../../entity/Category"
import {getRepository, In} from "typeorm"
import {dealPageResult, PageResult} from "../../types/types"
import {dealOrderBy, dealPageData, OrderByAndPageInput, OrderByInput, PageInput} from '../../types/input'
import {plainToClass} from "class-transformer"
import {Product} from '../../../entity/Product'
import {commonQueryWhere} from '../../common/query'
import {CategoryRootName} from '../../../common/ss_common/enum'
import {dealProductForDict, ProductPage} from '../product/product'

@ObjectType()
class CategoryPage extends PageResult<Category> {
  @Field(returns => [Category])
  list: Category[]
}

@InputType()
class CategoryListInput {
  @Field()
  category: Category
  @Field({defaultValue: new PageInput()})
  pageInput: PageInput
  @Field()
  orderByInput: OrderByInput
}

@Resolver(of => Category)
export class CategoryResolver {

  @Authorized('web_client')
  @Query(returns => CategoryPage)
  async categoryList(@Arg('data') data: CategoryListInput) {
    const res = await getRepository(Category)
        .findAndCount({
          where: {
            parentCategory: {
              id: data.category?.parentCategory?.id,
            },
          },
          relations: {
            parentCategory: {
              parentCategory: true,
            },
          },
          order: dealOrderBy(data.orderByInput),
          ...dealPageData(data.pageInput),
        })
    return dealPageResult(res)
  }

  @Authorized('web_client')
  @Query(returns => Category)
  async oneCategory(@Arg('data') data: Category) {
    return await getRepository(Category)
        .findOne({
          where: {
            id: data.id,
          },
          relations: {
            parentCategory: true,
          },
        })
  }

  @Authorized()
  @Mutation(returns => Category)
  async saveCategory(@Arg('categoryItemInput', returns => Category) categoryItemInput: Category) {
    const dataBase = getRepository(Category)
    const numberData = await dataBase.findOne({
      where: {
        parentCategory: {
          id: categoryItemInput.parentCategory?.id,
        },
      },
      order: {
        number: 'desc',
      },
    })
    return await dataBase.save({
      ...plainToClass(Category, {
        ...categoryItemInput,
        parentId: categoryItemInput?.parentCategory?.id,
      }),
      // parentCategory,
      number: 1 + (numberData?.number ?? 0),
    })
  }

  @Authorized('web_client')
  @Query(returns => ProductPage)
  async productsInCategory(@Arg('categoryItemInput', returns => Category) categoryItemInput: Category, @Arg('productItemInput', returns => Product) productItemInput: Product, @Arg('orderByAndPageInput', returns => OrderByAndPageInput)orderByAndPageInput: OrderByAndPageInput) {
    const _condition = {
      ...commonQueryWhere,
      isEnable: 1,
    }
    const categories = await getRepository(Category)
        .find({
          relations: {
            parentCategory: {
              parentCategory: {
                parentCategory: true,
              },
            },
          },
          where: [{
            id: categoryItemInput.id,
            ..._condition,
          }, {
            ..._condition,
            parentCategory: {
              ..._condition,
              id: categoryItemInput.id,
            },
          }, {
            ..._condition,
            parentCategory: {
              ..._condition,
              parentCategory: {
                ..._condition,
                id: categoryItemInput.id,
              },
            },
          }].map(value => ({
            ...value,
          })),
        })
    if (categories.length === 0) {
      return []
    }
    const productsRes = await getRepository(Product)
        .findAndCount({
          relations: {
            img: true,
          },
          where: {
            ..._condition,
            isGroup: productItemInput?.isGroup ?? 0,
            category: {
              id: In(categories.map(value => value.id)),
            },
          },
        })
    return dealPageResult([await dealProductForDict(productsRes[0]), productsRes[1]])
  }

  @Authorized()
  @Query(returns => Number)
  async categoryLevel(@Arg('categoryItemInput', returns => Category) categoryItemInput: Category) {
    const res = await getRepository(Category)
        .findOne({
          where: {
            id: categoryItemInput.id,
          },
          relations: {
            parentCategory: {
              parentCategory: {
                parentCategory: true,
              },
            },
          },
        })
    if (res?.parentCategory?.id === CategoryRootName) {
      return 1
    } else if (res?.parentCategory?.parentCategory?.id === CategoryRootName) {
      return 2
    } else if (res?.parentCategory?.parentCategory?.parentCategory?.id === CategoryRootName) {
      return 3
    } else {
      return -1
    }
  }

  @Authorized('web_client')
  @Query(returns => Category)
  async categoryRootParent(@Arg('categoryItemInput', returns => Category) categoryItemInput: Category) {
    return await getRepository(Category)
        .findOne({
          where: {
            id: categoryItemInput.id,
          },
          relations: {
            parentCategory: {
              parentCategory: {
                parentCategory: true,
              },
            },
          },
        })
  }

}
