import { Column, Entity } from "typeorm";

@Entity("product_img", { schema: "dw_server" })
export class ProductImg {
  @Column("varchar", { primary: true, name: "id", length: 40 })
  id: string;

  @Column("varchar", { name: "name", length: 200 })
  name: string;

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

  @Column("varchar", { name: "product_id", length: 40 })
  productId: string;

  @Column("int", { name: "number", nullable: true, default: () => "'1'" })
  number: number | null;

  @Column("varchar", { name: "url", nullable: true, length: 400 })
  url: string | null;
}
