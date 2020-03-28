import {Column, Entity, ManyToOne, OneToMany, OneToOne} from "typeorm"
import {ROrderUser} from "./ROrderUser"
import {Field, InputType, ObjectType} from "type-graphql"
import {User} from "./User"
import {ROrderProduct} from "./ROrderProduct"
import {UserAddress} from "./UserAddress"
import {UserPayCard} from './UserPayCard'

@InputType('OrderInfoItemInput')
@ObjectType()
@Entity("order_info", {schema: "dw_server"})
export class OrderInfo {
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

  @Field()
  @Column("timestamp", {name: "update_time", nullable: true})
  updateTime: Date | null

  @Field()
  @Column("int", {name: "is_delete", nullable: true, default: () => "'0'"})
  isDelete: number | null

  @Field()
  @Column("varchar", {name: "number", length: 40})
  number: string

  @Field()
  @Column("int", {name: "state", nullable: true, default: () => "'1'", comment: '1 已下单， 2 已收款， 3 已配货， 4 已取货， 5 订单完成， 6 订单取消'})
  state: number | null

  @Field()
  @Column("float", {
    name: "actually_paid",
    nullable: true,
    precision: 12,
    default: () => "'0'"
  })
  actuallyPaid: number | null

  @Field()
  @Column("varchar", {name: "address_id", length: 40})
  addressId: string

  @Field()
  @Column("varchar", {name: "payment_method_card_id", length: 40})
  paymentMethodCardId: string

  @Field()
  @Column("float", {
    name: "subtotal",
    nullable: true,
    precision: 12,
    default: () => "'0'"
  })
  subtotal: number | null

  @Field()
  @Column("float", {
    name: "coupon_discount",
    nullable: true,
    precision: 12,
    default: () => "'0'"
  })
  couponDiscount: number | null

  @Field()
  @Column("float", {
    name: "vip_discount",
    nullable: true,
    precision: 12,
    default: () => "'0'"
  })
  vipDiscount: number | null

  @Field()
  @Column("float", {
    name: "transportation_costs",
    nullable: true,
    precision: 12,
    default: () => "'0'",
    comment: '运费',
  })
  transportationCosts: number | null

  @Field()
  @Column("float", {
    name: "sale_tax",
    nullable: true,
    precision: 12,
    default: () => "'0'",
    comment: '税费',
  })
  saleTax: number | null

  @Field({nullable: true})
  @Column("varchar", {name: "order_id", nullable: true, length: 40})
  orderId: string | null

  @Field()
  @Column("float", {
    name: "discount_product_total",
    nullable: true,
    precision: 12,
    default: () => "'0'"
  })
  discountProductTotal: number | null

  @Field({nullable: true})
  @Column("timestamp", {name: "finish_time", nullable: true})
  finishTime: Date | null

  @Field(returns => ROrderUser)
  @OneToOne(type => ROrderUser, object => object.orderInfo)
  rOrderUser: ROrderUser | null

  @Field(returns => User, {nullable: true})
  @ManyToOne(type => User, object => object.orderInfo)
  user: User | null

  @Field(returns => [ROrderProduct], {nullable: true})
  @OneToMany(type => ROrderProduct, object => object.orderInfo)
  rOrderProduct: ROrderProduct[] | null

  @Field(returns => UserAddress)
  @ManyToOne(type => UserAddress, object => object.orderInfo)
  userAddress: UserAddress | null

  @Field({nullable: true})
  @Column("timestamp", {name: "pickUpTime", nullable: true, comment: "取货时间"})
  pickUpTime: Date | null

  @Field({nullable: true})
  @Column("varchar", {name: "pickUpType", nullable: true, comment: "取货方式 Self: 自提 Delivery: 配送", default:() => "''"})
  pickUpType: string | null

  @Field({nullable: true})
  @Column("float", {
    nullable: true,
    comment: "订单产生达人币",
    precision: 12,
    default: () => "'0'",
  })
  generateCoin: number | null

  @Field({nullable: true})
  @Column("float", {
    nullable: true,
    comment: "订单抵扣达人币",
    precision: 12,
    default: () => "'0'",
  })
  deductCoin: number | null

  @Field(returns => UserPayCard)
  @ManyToOne(type => UserPayCard, object => object.orderInfo)
  userPayCard: UserPayCard | null

  @Field()
  @Column("int", {name: "selfAddressIndex", nullable: true, default: () => "'0'"})
  selfAddressIndex: number | null

}
