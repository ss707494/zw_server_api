import {Arg, Field, FieldResolver, Mutation, ObjectType, Query, Resolver, ResolverInterface, Root} from "type-graphql"
import {Category} from "../../../entity/Category"
import {getRepository} from "typeorm"
import {dealPageResult, PageResult} from "../../types/types"
import {CategoryInput} from "./categoryInput"
import {dealOrderBy, dealPageData} from "../../types/input"
import {plainToClass} from "class-transformer"

@ObjectType()
class CategoryPage extends PageResult<Category> {
  @Field(returns => [Category])
  list: Category[]
}

@Resolver(of => Category)
export class CategoryResolver implements ResolverInterface<Category> {

  @Query(returns => CategoryPage)
  async getCategoryList(@Arg('categoryInput') categoryInput: CategoryInput) {
    const res = await getRepository(Category)
        .findAndCount({
          where: {
            parentCategory: {
              id: categoryInput.categoryId,
            },
          },
          relations: {
            parentCategory: {
              parentCategory: true,
            },
          },
          order: dealOrderBy(categoryInput),
          ...dealPageData(categoryInput),
        })

    return dealPageResult(res)
  }

  @Query(returns => Category)
  async getCategory(@Arg('categoryInput') categoryInput: CategoryInput) {
    return await getRepository(Category)
        .findOne({
          relations: {
            parentCategory: true,
          }
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
      ...plainToClass(Category, categoryItemInput),
      // parentCategory,
      number: 1 + (numberData?.number ?? 0),
    })
  }

  @FieldResolver(returns => Category)
  categoryParent(@Root() category: Category) {

    return category
  }


}
