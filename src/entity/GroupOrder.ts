import {Column, Entity, Generated, JoinColumn, ManyToOne, OneToOne} from "typeorm";
import {Field, InputType, ObjectType} from "type-graphql";
import {GroupQueue} from "./GroupQueue";
import {OrderInfo} from "./OrderInfo";
import {User} from "./User";

@InputType('GroupOrderItemInput')
@ObjectType()
@Entity("group_order", {schema: "dw_server"})
export class GroupOrder {
  @Field()
  @Column("varchar", {primary: true, name: "id", length: 40})
  @Generated('uuid')
  id: string;

  @Field()
  @Column("varchar", {name: "name", nullable: true, length: 200})
  name: string | null;

  @Field()
  @Column("timestamp", {
    name: "create_time",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP"
  })
  createTime: Date | null;

  @Field()
  @Column("timestamp", {name: "update_time", nullable: true})
  updateTime: Date | null;

  @Field()
  @Column("int", {name: "is_delete", nullable: true, default: () => "'0'"})
  isDelete: number | null;

  @Field()
  @Column("varchar", {name: "group_queue_id", length: 40})
  groupQueueId: string;

  @Column("varchar", {name: "user_id", length: 40})
  @Field()
  userId: string;

  @Field()
  @Column("int", {
    name: "order_group_amount",
    nullable: true,
    default: () => "'0'"
  })
  orderGroupAmount: number | null;

  @Field()
  @Column("varchar", {name: "order_id", nullable: true, length: 40})
  orderId: string | null;

  @Field(returns => OrderInfo)
  @OneToOne(type => OrderInfo, object => object.groupOrder)
  @JoinColumn()
  orderInfo: OrderInfo

  @Field(returns => GroupQueue)
  @ManyToOne(type => GroupQueue, object => object.groupOrder)
  groupQueue: GroupQueue

  @Field(returns => User)
  @ManyToOne(type => User, object => object.groupOrder)
  user: User

}
