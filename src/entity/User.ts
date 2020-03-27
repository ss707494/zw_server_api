import {Column, Entity, JoinColumn, OneToMany, OneToOne} from "typeorm"
import {Field, Float, InputType, ObjectType} from "type-graphql"
import {UserInfo} from "./UserInfo"
import {ROrderUser} from "./ROrderUser"
import {OrderInfo} from "./OrderInfo"
import {Type} from 'class-transformer'
import {OrderState} from 'ss_common/enum'
import {addMonths, isSameMonth, isSameYear} from 'date-fns'

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

}

