import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("number", ["number"], {})
@Entity("category", { schema: "dw_server" })
export class Category {
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

  @Column("int", { name: "is_enable", nullable: true, default: () => "'0'" })
  isEnable: number | null;

  @Column("varchar", { name: "remark", nullable: true, length: 200 })
  remark: string | null;

  @Column("int", { name: "sort", nullable: true, default: () => "'0'" })
  sort: number | null;

  @Column("varchar", { name: "parent_id", nullable: true, length: 40 })
  parentId: string | null;

  @Column("varchar", { name: "full_parent_id", nullable: true, length: 200 })
  fullParentId: string | null;

  @PrimaryGeneratedColumn({ type: "int", name: "number" })
  number: number;

  @Column("varchar", { name: "user_id", nullable: true, length: 40 })
  userId: string | null;

  @Column("varchar", { name: "img_url", nullable: true, length: 400 })
  imgUrl: string | null;
}
