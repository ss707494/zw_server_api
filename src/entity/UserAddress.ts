import { Column, Entity } from "typeorm";

@Entity("user_address", { schema: "dw_server" })
export class UserAddress {
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

  @Column("varchar", { name: "zip", nullable: true, length: 20 })
  zip: string | null;

  @Column("varchar", { name: "province", nullable: true, length: 40 })
  province: string | null;

  @Column("varchar", { name: "city", nullable: true, length: 40 })
  city: string | null;

  @Column("varchar", { name: "district", nullable: true, length: 40 })
  district: string | null;

  @Column("varchar", { name: "address", nullable: true, length: 200 })
  address: string | null;

  @Column("int", { name: "is_default", nullable: true, default: () => "'0'" })
  isDefault: number | null;

  @Column("varchar", { name: "user_id", length: 40 })
  userId: string;

  @Column("varchar", {
    name: "contact_information",
    nullable: true,
    length: 40
  })
  contactInformation: string | null;

  @Column("varchar", { name: "contact_user_name", nullable: true, length: 40 })
  contactUserName: string | null;
}
