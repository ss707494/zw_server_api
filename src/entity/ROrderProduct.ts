import { Column, Entity } from "typeorm";

@Entity("r_order_product", { schema: "dw_server" })
export class ROrderProduct {
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

  @Column("varchar", { name: "order_id", length: 40 })
  orderId: string;

  @Column("varchar", { name: "product_id", length: 40 })
  productId: string;

  @Column("float", {
    name: "count",
    nullable: true,
    precision: 12,
    default: () => "'0'"
  })
  count: number | null;
}
