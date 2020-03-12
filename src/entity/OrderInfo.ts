import { Column, Entity } from "typeorm";

@Entity("order_info", { schema: "dw_server" })
export class OrderInfo {
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

  @Column("varchar", { name: "number", length: 40 })
  number: string;

  @Column("int", { name: "state", nullable: true, default: () => "'1'" })
  state: number | null;

  @Column("float", {
    name: "actually_paid",
    nullable: true,
    precision: 12,
    default: () => "'0'"
  })
  actuallyPaid: number | null;

  @Column("varchar", { name: "address_id", length: 40 })
  addressId: string;

  @Column("varchar", { name: "payment_method_card_id", length: 40 })
  paymentMethodCardId: string;

  @Column("float", {
    name: "subtotal",
    nullable: true,
    precision: 12,
    default: () => "'0'"
  })
  subtotal: number | null;

  @Column("float", {
    name: "coupon_discount",
    nullable: true,
    precision: 12,
    default: () => "'0'"
  })
  couponDiscount: number | null;

  @Column("float", {
    name: "vip_discount",
    nullable: true,
    precision: 12,
    default: () => "'0'"
  })
  vipDiscount: number | null;

  @Column("float", {
    name: "transportation_costs",
    nullable: true,
    precision: 12,
    default: () => "'0'"
  })
  transportationCosts: number | null;

  @Column("float", {
    name: "sale_tax",
    nullable: true,
    precision: 12,
    default: () => "'0'"
  })
  saleTax: number | null;

  @Column("varchar", { name: "order_id", nullable: true, length: 40 })
  orderId: string | null;

  @Column("float", {
    name: "discount_product_total",
    nullable: true,
    precision: 12,
    default: () => "'0'"
  })
  discountProductTotal: number | null;

  @Column("timestamp", { name: "finish_time", nullable: true })
  finishTime: Date | null;
}
