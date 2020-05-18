import {Column, Entity, ManyToOne} from "typeorm"
import {Field, InputType, ObjectType} from 'type-graphql'
import {Product} from './Product'

@InputType('ProductImgItemInput')
@ObjectType()
@Entity("product_img", {schema: "dw_server"})
export class ProductImg {
  @Column("varchar", {primary: true, name: "id", length: 40})
  @Field()
  id: string

  @Column("varchar", {name: "name", length: 200})
  @Field()
  name: string

  @Column("timestamp", {
    name: "create_time",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  @Field()
  createTime: Date | null

  @Column("timestamp", {name: "update_time", nullable: true})
  @Field()
  updateTime: Date | null

  @Column("int", {name: "is_delete", nullable: true, default: () => "'0'"})
  @Field()
  isDelete: number | null

  @Field()
  @Column("varchar", {name: "product_id", length: 40})
  productId: string

  @Field()
  @Column("int", {name: "number", nullable: true, default: () => "'1'"})
  number: number | null

  @Field()
  @Column("varchar", {name: "url", nullable: true, length: 400})
  url: string | null

  @Field(returns => Product)
  @ManyToOne(type => Product, object => object.img)
  product: Product | null

}
