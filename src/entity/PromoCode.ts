import { Column, Entity } from "typeorm";

@Entity("promo_code", { schema: "dw_server" })
export class PromoCode {
  @Column("varchar", { primary: true, name: "id", length: 40 })
  id: string;

  @Column("varchar", { name: "name", nullable: true, length: 200 })
  name: string | null;

  @Column("timestamp", {
    name: "create_time",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP"
  })
  createTime: Date | null;

  @Column("timestamp", { name: "update_time", nullable: true })
  updateTime: Date | null;

  @Column("int", { name: "is_delete", nullable: true, default: () => "'0'" })
  isDelete: number | null;

  @Column("varchar", { name: "remark", length: 40 })
  remark: string;

  @Column("varchar", { name: "title", nullable: true, length: 200 })
  title: string | null;

  @Column("varchar", { name: "discount_type", length: 20 })
  discountType: string;

  @Column("float", {
    name: "discount_amount",
    precision: 12,
    default: () => "'0'"
  })
  discountAmount: number;

  @Column("varchar", {
    name: "discount_condition",
    nullable: true,
    length: 20,
    default: () => "'No'"
  })
  discountCondition: string | null;

  @Column("float", {
    name: "discount_condition_amount",
    nullable: true,
    precision: 12,
    default: () => "'0'"
  })
  discountConditionAmount: number | null;

  @Column("varchar", { name: "product_category", nullable: true, length: 40 })
  productCategory: string | null;

  @Column("varchar", { name: "img_url", nullable: true, length: 400 })
  imgUrl: string | null;

  @Column("timestamp", { name: "effective_date_start", nullable: true })
  effectiveDateStart: Date | null;

  @Column("timestamp", { name: "effective_date_end", nullable: true })
  effectiveDateEnd: Date | null;

  @Column("varchar", { name: "promo_code_type", length: 40 })
  promoCodeType: string;

  @Column("int", { name: "reuse_times", nullable: true, default: () => "'1'" })
  reuseTimes: number | null;

  @Column("varchar", { name: "code", nullable: true, length: 100 })
  code: string | null;

  @Column("int", { name: "isDisable", nullable: true, default: () => "'0'" })
  isDisable: number | null;

}
