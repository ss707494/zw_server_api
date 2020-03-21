import {Column, Entity, JoinColumn, OneToMany, OneToOne} from "typeorm"
import {Field, InputType, ObjectType} from "type-graphql"
import {UserInfo} from "./UserInfo"
import {ROrderUser} from "./ROrderUser"
import {OrderInfo} from "./OrderInfo"
import {Type} from 'class-transformer'

@InputType('UserItemInput')
@ObjectType()
@Entity("user", {schema: "dw_server"})
export class User {
  @Field()
  @Column("varchar", {primary: true, name: "id", length: 40})
  id: string

  @Field()
  @Column("varchar", {name: "name", nullable: true, length: 200})
  name: string | null

  @Field()
  @Column("timestamp", {
    name: "create_time",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP"
  })
  createTime: Date | null

  @Field({nullable: true})
  @Column("timestamp", {name: "update_time", nullable: true})
  updateTime: Date | null

  @Field()
  @Column("int", {name: "is_delete", nullable: true, default: () => "'0'"})
  isDelete: number | null

  @Field()
  @Column("varchar", {name: "password", nullable: true, length: 200})
  password: string | null

  @Field()
  @Column("int", {name: "type", nullable: true, default: () => "'0'"})
  type: number | null

  @Field(returns => UserInfo, {nullable: true})
  @OneToOne(type1 => UserInfo, object => object.user)
  @JoinColumn()
  @Type()
  userInfo: UserInfo | null

  @Field(returns => [ROrderUser], {nullable: true})
  @OneToMany(type => ROrderUser, object => object.user)
  rOrderUser: ROrderUser[] | null

  @Field(returns => [OrderInfo], {nullable: true})
  @OneToMany(type => OrderInfo, object => object.user)
  orderInfo: OrderInfo[] | null

}
