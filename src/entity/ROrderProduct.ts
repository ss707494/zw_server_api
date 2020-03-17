import {Column, Entity, ManyToOne} from "typeorm"
import {Product} from "./Product"
import {OrderInfo} from "./OrderInfo"
import {Field, ObjectType} from "type-graphql"

@ObjectType()
@Entity("r_order_product", {schema: "dw_server"})
export class ROrderProduct {
  @Field()
  @Column("varchar", {primary: true, name: "id", length: 40})
  id: string

  @Field()
  @Column("varchar", {name: "name", nullable: true, length: 200})
  name: string | null

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
  @Column("varchar", {name: "order_id", length: 40})
  orderId: string

  @Field()
  @Column("varchar", {name: "product_id", length: 40})
  productId: string

  @Field()
  @Column("float", {
    name: "count",
    nullable: true,
    precision: 12,
    default: () => "'0'"
  })
  count: number | null

  @Field(returns => Product, {nullable: true})
  @ManyToOne(type => Product, object => object.rOrderProduct)
  product: Product | null

  @Field(returns => OrderInfo, {nullable: true})
  @ManyToOne(type => OrderInfo, object => object.rOrderProduct)
  orderInfo: OrderInfo | null

}
