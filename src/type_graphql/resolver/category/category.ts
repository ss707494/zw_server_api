import {
  Arg,
  Field,
  FieldResolver,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  ResolverInterface,
  Root,
} from "type-graphql"
import {Category} from "../../../entity/Category"
import {getRepository} from "typeorm"
import {dealPageResult, PageResult} from "../../types/types"
import {dealOrderBy, dealPageData, OrderByInput, PageInput} from "../../types/input"
import {plainToClass} from "class-transformer"

@ObjectType()
class CategoryPage extends PageResult<Category> {
  @Field(returns => [Category])
  list: Category[]
}

@InputType()
class CategoryListInput {
  @Field()
  category: Category
  @Field()
  pageInput: PageInput
  @Field()
  orderByInput: OrderByInput
}

@Resolver(of => Category)
export class CategoryResolver implements ResolverInterface<Category> {

  @Query(returns => CategoryPage)
  async categoryList(@Arg('data') data: CategoryListInput) {
    const res = await getRepository(Category)
        .findAndCount({
          where: {
            parentCategory: {
              id: data.category.parentCategory.id,
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

  @Query(returns => Category)
  async oneCategory(@Arg('data') data: Category) {
    return await getRepository(Category)
        .findOne({
          relations: {
            parentCategory: true,
          },
        })
  }

  @Mutation(returns => Category)
  async saveCategory(@Arg('categoryItemInput') categoryItemInput: Category) {
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

  @FieldResolver(returns => Category)
  categoryParent(@Root() category: Category) {

    return category
  }


}
