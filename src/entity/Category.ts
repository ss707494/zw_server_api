import {Column, Entity, Generated, ManyToOne, OneToMany} from "typeorm"
import {Field, InputType, ObjectType} from "type-graphql"
import {Type} from "class-transformer"
import {Product} from './Product'

@ObjectType()
@InputType('CategoryItemInput')
@Entity("category", {schema: "dw_server"})
export class Category {
  @Field()
  @Column("varchar", {primary: true, name: "id", length: 40})
  @Generated('uuid')
  id: string

  @Field()
  @Column("varchar", {name: "name", length: 200})
  name: string

  @Field()
  @Column("timestamp", {
    name: "create_time",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP"
  })
  createTime: Date | null

  @Field()
  @Column("timestamp", {name: "update_time", nullable: true})
  updateTime: Date | null

  @Field()
  @Column("int", {name: "is_delete", nullable: true, default: () => "'0'"})
  isDelete: number | null

  @Field()
  @Column("int", {name: "is_enable", nullable: true, default: () => "'0'"})
  isEnable: number | null

  @Field()
  @Column("varchar", {name: "remark", nullable: true, length: 200})
  remark: string | null

  @Field()
  @Column("int", {name: "sort", nullable: true, default: () => "'0'"})
  sort: number | null

  @Field()
  @Column("varchar", {name: "parent_id", nullable: true, length: 40})
  parentId: string | null

  @Field()
  @Column("varchar", {name: "full_parent_id", nullable: true, length: 200})
  fullParentId: string | null

  @Field()
  @Column("int", {name: "number"})
  number: number

  @Field()
  @Column("varchar", {name: "user_id", nullable: true, length: 40})
  userId: string | null

  @Field()
  @Column("varchar", {name: "img_url", nullable: true, length: 400})
  imgUrl: string | null

  @Field(returns => Category)
  @ManyToOne(type => Category, category => category.childCategories)
  @Type(type => Category)
  parentCategory: Category

  @Field(returns => [Category])
  @OneToMany(type => Category, category => category.parentCategory)
  childCategories: Category[]

  @Field(returns => Category)
  categoryParent: Category | null

  @Field(returns => [Product])
  @OneToMany(type => Product, object => object.category)
  product: Product | null

}
