import { Column, Entity } from "typeorm";

@Entity("user_pay_card", { schema: "dw_server" })
export class UserPayCard {
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

  @Column("varchar", { name: "user_id", length: 40 })
  userId: string;

  @Column("varchar", { name: "number", length: 40 })
  number: string;

  @Column("varchar", { name: "code", length: 10 })
  code: string;

  @Column("varchar", { name: "user_name", length: 50 })
  userName: string;

  @Column("varchar", { name: "address_detail", nullable: true, length: 200 })
  addressDetail: string | null;

  @Column("varchar", { name: "zip_code", nullable: true, length: 20 })
  zipCode: string | null;

  @Column("varchar", { name: "city", nullable: true, length: 20 })
  city: string | null;

  @Column("varchar", { name: "contact", nullable: true, length: 20 })
  contact: string | null;

  @Column("int", { name: "is_default", nullable: true, default: () => "'0'" })
  isDefault: number | null;
}
