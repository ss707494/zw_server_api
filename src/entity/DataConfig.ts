import { Column, Entity } from "typeorm";

@Entity("data_config", { schema: "dw_server" })
export class DataConfig {
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

  @Column("varchar", { name: "type", length: 40 })
  type: string;

  @Column("json", { name: "value" })
  value: object;

  @Column("varchar", { name: "remark", length: 40 })
  remark: string;
}
