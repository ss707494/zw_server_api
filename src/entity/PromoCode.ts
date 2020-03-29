import {Column, Entity} from "typeorm"
import {Field, InputType, ObjectType} from 'type-graphql'

@InputType('PromoCodeItemInput')
@ObjectType()
@Entity("promo_code", { schema: "dw_server" })
export class PromoCode {
  @Field()
  @Column("varchar", { primary: true, name: "id", length: 40 })
  id: string;

  @Field()
  @Column("varchar", { name: "name", nullable: true, length: 200 })
  name: string | null;

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
  @Column("varchar", { name: "remark", length: 40 })
  remark: string;

  @Field()
  @Column("varchar", { name: "title", nullable: true, length: 200 })
  title: string | null;

  @Field()
  @Column("varchar", { name: "discount_type", length: 20 })
  discountType: string;

  @Field()
  @Column("float", {
    name: "discount_amount",
    precision: 12,
    default: () => "'0'"
  })
  discountAmount: number;

  @Field()
  @Column("varchar", {
    name: "discount_condition",
    nullable: true,
    length: 20,
    default: () => "'No'"
  })
  discountCondition: string | null;

  @Field()
  @Column("float", {
    name: "discount_condition_amount",
    nullable: true,
    precision: 12,
    default: () => "'0'"
  })
  discountConditionAmount: number | null;

  @Field()
  @Column("varchar", { name: "product_category", nullable: true, length: 40 })
  productCategory: string | null;

  @Field()
  @Column("varchar", { name: "img_url", nullable: true, length: 400 })
  imgUrl: string | null;

  @Field()
  @Column("timestamp", { name: "effective_date_start", nullable: true })
  effectiveDateStart: Date | null;

  @Field()
  @Column("timestamp", { name: "effective_date_end", nullable: true })
  effectiveDateEnd: Date | null;

  @Field()
  @Column("varchar", { name: "promo_code_type", length: 40 })
  promoCodeType: string;

  @Field()
  @Column("int", { name: "reuse_times", nullable: true, default: () => "'1'" })
  reuseTimes: number | null;

  @Field()
  @Column("varchar", { name: "code", nullable: true, length: 100 })
  code: string | null;

  @Field()
  @Column("int", { name: "isDisable", nullable: true, default: () => "'0'" })
  isDisable: number | null;

}
