import { Column, Entity } from "typeorm";

@Entity("group_order", { schema: "dw_server" })
export class GroupOrder {
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

  @Column("varchar", { name: "group_queue_id", length: 40 })
  groupQueueId: string;

  @Column("varchar", { name: "user_id", length: 40 })
  userId: string;

  @Column("int", {
    name: "order_group_amount",
    nullable: true,
    default: () => "'0'"
  })
  orderGroupAmount: number | null;

  @Column("varchar", { name: "order_id", nullable: true, length: 40 })
  orderId: string | null;
}
