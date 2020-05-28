import {Column, Entity, Generated, ManyToOne} from "typeorm"
import {Field, InputType, ObjectType} from 'type-graphql'
import {User} from './User'
import {Product} from './Product'

@InputType('ShopCartItemInput')
@ObjectType()
@Entity("shop_cart", {schema: "dw_server"})
export class ShopCart {
  @Field()
  @Column("varchar", {primary: true, name: "id", length: 40})
  @Generated('uuid')
  id: string

  @Field()
  @Column("varchar", {name: "name", nullable: true, length: 200})
  name: string | null

  @Field()
  @Column("timestamp", {
    name: "create_time",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createTime: Date | null

  @Field()
  @Column("timestamp", {name: "update_time", nullable: true})
  updateTime: Date | null

  @Field()
  @Column("int", {name: "is_delete", nullable: true, default: () => "'0'"})
  isDelete: number | null

  @Field()
  @Column("varchar", {name: "user_id", length: 40})
  userId: string

  @Field()
  @Column("varchar", {name: "product_id", length: 40})
  productId: string

  @Field()
  @Column("int", {name: "number", nullable: true, default: () => "'1'"})
  number: number | null

  @Field()
  @Column("int", {name: "is_next", nullable: true, default: () => "'0'"})
  isNext: number | null

  @Field(returns => User)
  @ManyToOne(type => User, object => object.shopCart)
  user: User | null

  @Field(returns => Product)
  @ManyToOne(type => Product, object => object.shopCart)
  product: Product | null

}
