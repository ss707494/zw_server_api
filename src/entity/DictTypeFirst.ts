import { Column, Entity } from "typeorm";

@Entity("dict_type_first", { schema: "dw_server" })
export class DictTypeFirst {
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

  @Column("varchar", { name: "parent_code", nullable: true, length: 40 })
  parentCode: string | null;

  @Column("varchar", { name: "code", length: 40 })
  code: string;

  @Column("int", { name: "sort", nullable: true, default: () => "'0'" })
  sort: number | null;

  @Column("varchar", { name: "remark", length: 40 })
  remark: string;
}
