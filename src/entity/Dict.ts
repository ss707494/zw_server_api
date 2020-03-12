import { Column, Entity } from "typeorm";

@Entity("dict", { schema: "dw_server" })
export class Dict {
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

  @Column("int", { name: "is_disable", nullable: true, default: () => "'0'" })
  isDisable: number | null;

  @Column("varchar", { name: "dict_type_code", length: 40 })
  dictTypeCode: string;

  @Column("varchar", { name: "code", length: 40 })
  code: string;

  @Column("int", { name: "sort", nullable: true, default: () => "'0'" })
  sort: number | null;

  @Column("varchar", { name: "remark", length: 40 })
  remark: string;
}
