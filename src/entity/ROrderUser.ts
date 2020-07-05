import {Column, Entity, JoinColumn, ManyToOne, OneToOne} from "typeorm"
import {OrderInfo} from "./OrderInfo"
import {User} from "./User"
import {Field, InputType, ObjectType} from "type-graphql"

@InputType('ROrderUserItemInput')
@ObjectType()
@Entity("r_order_user", {schema: "dw_server"})
export class ROrderUser {
  @Field()
  @Column("varchar", {primary: true, name: "id", length: 40})
  id: string

  @Field({nullable: true})
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
  @Column("varchar", {name: "user_id", length: 40})
  userId: string

  @Field()
  @Column("varchar", {name: "order_id", length: 40})
  orderId: string

  @Field(returns => OrderInfo, {nullable: true})
  @OneToOne(type => OrderInfo, object => object.rOrderUser)
  @JoinColumn()
  orderInfo: OrderInfo | null

  @Field(returns => User, {nullable: true})
  @ManyToOne(type => User, user => user.rOrderUser)
  user: User | null

}
