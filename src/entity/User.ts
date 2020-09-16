import {Column, Entity, Generated, JoinColumn, OneToMany, OneToOne} from "typeorm"
import {Field, Float, InputType, ObjectType} from "type-graphql"
import {UserInfo} from "./UserInfo"
import {ROrderUser} from "./ROrderUser"
import {OrderInfo} from "./OrderInfo"
import {Type} from 'class-transformer'
import {addMonths, isSameMonth, isSameYear} from 'date-fns'
import {OrderState} from '../common/ss_common/enum'
import {UserPayCard} from './UserPayCard'
import {UserAddress} from './UserAddress'
import {ShopCart} from './ShopCart'
import {GroupOrder} from "./GroupOrder";

@InputType('UserItemInput')
@ObjectType()
@Entity("user", {schema: "dw_server"})
export class User {
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

  @Field(returns => [UserPayCard])
  @OneToMany(type => UserPayCard, object => object.user)
  userPayCard: UserPayCard[] | null

  @Field(returns => [UserAddress])
  @OneToMany(type => UserAddress, object => object.user)
  userAddress: UserAddress[] | null
  userRes: any

  @Field(returns => Float, {nullable: true})
  get orderCoinNextMonth() {
    if (this.orderInfo?.length) {
      const currentDate = new Date()
      return this.orderInfo.filter(value => value.state === OrderState.Finish).reduce((previousValue, currentValue) => {
        if (isSameMonth(currentValue.finishTime, currentDate)) {
          return previousValue + currentValue.generateCoin
        }
        return previousValue
      }, 0)
    }
    return 0
  }
  set orderCoinNextMonth(v) {
  }

  @Field(returns => Float, {nullable: true})
  get orderCoinCurrentMonthCost() {
    if (this.orderInfo?.length) {
      const currentDate = new Date()
      return this.orderInfo.filter(value => value.state === OrderState.Finish).reduce((previousValue, currentValue) => {
        if (isSameMonth(currentValue.finishTime, currentDate)) {
          return previousValue - currentValue.deductCoin
        }
        return previousValue
      }, 0)
    }
    return 0
  }
  set orderCoinCurrentMonthCost(v) {}

  @Field(returns => Float, {nullable: true})
  get orderCoinLastMonthGet() {
    if (this.orderInfo?.length) {
      const currentDate = new Date()
      const lastDate = addMonths(currentDate, -1)
      return this.orderInfo.filter(value => value.state === OrderState.Finish).reduce((previousValue, currentValue) => {
        if (isSameMonth(currentValue.finishTime, lastDate)) {
          return previousValue + currentValue.generateCoin
        }
        return previousValue
      }, 0)
    }
    return 0
  }
  set orderCoinLastMonthGet(v) {}

  @Field(returns => Float, {nullable: true})
  get orderCoinCurrentMonth() {
    if (this.orderInfo?.length) {
      const currentDate = new Date()
      const lastDate = addMonths(currentDate, -1)
      return this.orderInfo.filter(value => value.state === OrderState.Finish).reduce((previousValue, currentValue) => {
        if (isSameMonth(currentValue.finishTime, lastDate)) {
          return previousValue + currentValue.generateCoin
        }
        if (isSameMonth(currentValue.finishTime, currentDate)) {
          return previousValue - currentValue.deductCoin
        }
        return previousValue
      }, 0)
    }
    return 0
  }
  set orderCoinCurrentMonth(v) {}

  @Field(returns => Float, {nullable: true})
  get orderAmountCurrentYear() {
    if (this.orderInfo?.length) {
      const currentDate = new Date()
      return this.orderInfo.filter(value => value.state === OrderState.Finish).reduce((previousValue, currentValue) => {
        if (isSameYear(currentValue.finishTime, currentDate)) {
          return previousValue + currentValue.subtotal
        }
        return previousValue
      }, 0)
    }
    return 0
  }
  set orderAmountCurrentYear(v) {}

  @Field(returns => [ShopCart])
  @OneToMany(type1 => ShopCart, object => object.user)
  shopCart: ShopCart[] | null

  @Field(returns => GroupOrder)
  @OneToMany(type => GroupOrder, object => object.user)
  groupOrder: GroupOrder

}

