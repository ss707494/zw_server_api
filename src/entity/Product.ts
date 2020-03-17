import {Column, Entity, Index, ManyToMany} from "typeorm"
import {ROrderProduct} from "./ROrderProduct"
import {Field, ObjectType} from "type-graphql"

@ObjectType()
@Index("number", ["number"], {})
@Entity("product", { schema: "dw_server" })
export class Product {
  @Field()
  @Column("varchar", { primary: true, name: "id", length: 40 })
  id: string;

  @Field()
  @Column("varchar", { name: "name", length: 200 })
  name: string;

  @Field()
  @Column("timestamp", {
    name: "create_time",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP"
  })
  createTime: Date | null;

  @Field()
  @Column("timestamp", { name: "update_time", nullable: true })
  updateTime: Date | null;

  @Field()
  @Column("int", { name: "is_delete", nullable: true, default: () => "'0'" })
  isDelete: number | null;

  @Field()
  @Column("varchar", { name: "category_id", length: 40 })
  categoryId: string;

  @Field()
  @Column("varchar", { name: "remark", nullable: true, length: 200 })
  remark: string | null;

  @Field()
  @Column("int", { name: "is_hot", nullable: true, default: () => "'0'" })
  isHot: number | null;

  @Field()
  @Column("int", { name: "is_new", nullable: true, default: () => "'0'" })
  isNew: number | null;

  @Field()
  @Column("int", { name: "is_enable", nullable: true, default: () => "'0'" })
  isEnable: number | null;

  @Field()
  @Column("int", { name: "sort", nullable: true, default: () => "'0'" })
  sort: number | null;

  @Field()
  @Column("float", {
    name: "stock",
    nullable: true,
    precision: 12,
    default: () => "'0'"
  })
  stock: number | null;

  @Field()
  @Column("varchar", {
    name: "unit",
    nullable: true,
    length: 10,
    default: () => "'g'"
  })
  unit: string | null;

  @Field()
  @Column("float", {
    name: "weight",
    nullable: true,
    precision: 12,
    default: () => "'0'"
  })
  weight: number | null;

  @Field()
  @Column("float", {
    name: "price_in",
    nullable: true,
    precision: 12,
    default: () => "'0'"
  })
  priceIn: number | null;

  @Field()
  @Column("float", {
    name: "price_out",
    nullable: true,
    precision: 12,
    default: () => "'0'"
  })
  priceOut: number | null;

  @Field()
  @Column("float", {
    name: "price_market",
    nullable: true,
    precision: 12,
    default: () => "'0'"
  })
  priceMarket: number | null;

  @Field()
  @Column("varchar", { name: "brand", nullable: true, length: 200 })
  brand: string | null;

  @Field()
  @Column({ type: "int", generated: 'increment', name: "number" })
  number: number;

  @Field()
  @Column("int", { name: "is_group", nullable: true, default: () => "'0'" })
  isGroup: number | null;

  @Field()
  @Column("int", {
    name: "group_precision",
    nullable: true,
    default: () => "'1'"
  })
  groupPrecision: number | null;

  @Field()
  @Column("int", { name: "group_amount", nullable: true, default: () => "'1'" })
  groupAmount: number | null;

  @Field()
  @Column("varchar", { name: "group_remark", nullable: true, length: 100 })
  groupRemark: string | null;

  @Field(returns => [ROrderProduct], {nullable: true})
  @ManyToMany(type => ROrderProduct, object => object.product)
  rOrderProduct: [ROrderProduct] | null;

}
