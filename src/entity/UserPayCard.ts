import {Column, Entity, Generated, OneToMany} from "typeorm"
import {Field, InputType, ObjectType} from 'type-graphql'
import {OrderInfo} from './OrderInfo'

@InputType('UserPayCardItemInput')
@ObjectType()
@Entity("user_pay_card", {schema: "dw_server"})
export class UserPayCard {
  @Field()
  @Column("varchar", {primary: true, name: "id", length: 40})
  @Generated('uuid')
  id: string

  @Field()
  @Column("varchar", {name: "name", nullable: true, length: 200})
  name: string | null

  @Field()
  @Column("timestamp", {
    name: "create_time",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createTime: Date | null

  @Field()
  @Column("timestamp", {name: "update_time", nullable: true})
  updateTime: Date | null

  @Field()
  @Column("int", {name: "is_delete", nullable: true, default: () => "'0'"})
  isDelete: number | null

  @Field()
  @Column("varchar", {name: "user_id", length: 40})
  userId: string

  @Field()
  @Column("varchar", {name: "number", length: 40})
  number: string

  @Field()
  @Column("varchar", {name: "code", length: 10})
  code: string

  @Field()
  @Column("varchar", {name: "user_name", length: 50})
  userName: string

  @Field()
  @Column("varchar", {name: "address_detail", nullable: true, length: 200})
  addressDetail: string | null

  @Field()
  @Column("varchar", {name: "zip_code", nullable: true, length: 20})
  zipCode: string | null

  @Field()
  @Column("varchar", {name: "city", nullable: true, length: 20})
  city: string | null

  @Field()
  @Column("varchar", {name: "contact", nullable: true, length: 20})
  contact: string | null

  @Field()
  @Column("int", {name: "is_default", nullable: true, default: () => "'0'"})
  isDefault: number | null

  @Field(returns => [OrderInfo])
  @OneToMany(type => OrderInfo, object => object.userPayCard)
  orderInfo: OrderInfo | null

  @Field()
  @Column("timestamp", {name: "expirationTime", nullable: true})
  expirationTime: Date | null

}
