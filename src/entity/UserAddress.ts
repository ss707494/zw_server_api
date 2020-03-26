import {Column, Entity, OneToMany} from "typeorm"
import {Field, InputType, ObjectType} from "type-graphql"
import {OrderInfo} from "./OrderInfo"

@InputType('UserAddressItemInput')
@ObjectType()
@Entity("user_address", { schema: "dw_server" })
export class UserAddress {
  @Field()
  @Column("varchar", { primary: true, name: "id", length: 40 })
  id: string;

  @Field()
  @Column("varchar", { name: "name", nullable: true, length: 200 })
  name: string | null;

  @Field()
  @Column("timestamp", {
    name: "create_time",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP"
  })
  createTime: Date | null;

  @Field()
  @Column("timestamp", { name: "update_time", nullable: true })
  updateTime: Date | null;

  @Field()
  @Column("int", { name: "is_delete", nullable: true, default: () => "'0'" })
  isDelete: number | null;

  @Field()
  @Column("varchar", { name: "zip", nullable: true, length: 20 })
  zip: string | null;

  @Field()
  @Column("varchar", { name: "province", nullable: true, length: 40 })
  province: string | null;

  @Field()
  @Column("varchar", { name: "city", nullable: true, length: 40 })
  city: string | null;

  @Field()
  @Column("varchar", { name: "district", nullable: true, length: 40 })
  district: string | null;

  @Field()
  @Column("varchar", { name: "address", nullable: true, length: 200 })
  address: string | null;

  @Field()
  @Column("int", { name: "is_default", nullable: true, default: () => "'0'" })
  isDefault: number | null;

  @Field()
  @Column("varchar", { name: "user_id", length: 40 })
  userId: string;

  @Field()
  @Column("varchar", {
    name: "contact_information",
    nullable: true,
    length: 40
  })
  contactInformation: string | null;

  @Field()
  @Column("varchar", { name: "contact_user_name", nullable: true, length: 40 })
  contactUserName: string | null;

  @Field(returns => [OrderInfo])
  @OneToMany(type => OrderInfo, object => object.userAddress)
  orderInfo: OrderInfo[] | null

  @Field(returns => String)
  get combineAddress() {
    return this.province + this.city + this.district + this.address
  }

}
