import {Column, Entity} from "typeorm"

@Entity("product_supplement", {schema: "dw_server"})
export class ProductSupplement {
  @Column("varchar", {primary: true, name: "id", length: 40})
  id: string

  @Column("varchar", {name: "name", nullable: true, length: 200})
  name: string | null

  @Column("timestamp", {
    name: "create_time",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createTime: Date | null

  @Column("timestamp", {name: "update_time", nullable: true})
  updateTime: Date | null

  @Column("int", {name: "is_delete", nullable: true, default: () => "'0'"})
  isDelete: number | null

  @Column("int", {name: "state", nullable: true, default: () => "'1'"})
  state: number | null

  @Column("float", {
    name: "amount",
    nullable: true,
    precision: 12,
    default: () => "'0'",
  })
  amount: number | null

  @Column("varchar", {name: "number", length: 40})
  number: string

  @Column("varchar", {name: "code", length: 40, default: () => "''"})
  code: string

  @Column("varchar", {name: "supplier", length: 40, default: () => "''"})
  supplier: string

  @Column("varchar", {name: "user_id", length: 40})
  userId: string

  @Column("int", {nullable: true, default: () => "'0'"})
  isGroup: number | null

}
