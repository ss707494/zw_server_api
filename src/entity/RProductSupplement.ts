import { Column, Entity } from "typeorm";

@Entity("r_product_supplement", { schema: "dw_server" })
export class RProductSupplement {
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

  @Column("varchar", { name: "supplement_id", length: 40 })
  supplementId: string;

  @Column("varchar", { name: "product_id", length: 40 })
  productId: string;

  @Column("float", {
    name: "count",
    nullable: true,
    precision: 12,
    default: () => "'0'"
  })
  count: number | null;

  @Column("float", {
    name: "amount",
    nullable: true,
    precision: 12,
    default: () => "'0'"
  })
  amount: number | null;

  @Column("varchar", { name: "supplier", length: 40 })
  supplier: string;

  @Column("varchar", { name: "remark", length: 40 })
  remark: string;
}
