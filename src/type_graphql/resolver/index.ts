import {UserResolve} from "./user/user"
import {OrderResolve} from "./order/order"
import {DataConfigResolver} from "./dataConfig/dataConfig"
import {DictResolver} from "./dict/dict"
import {CategoryResolver} from "./category/category"
import {PromoCodeResolver} from './promoCode/promoCode'
import {AuthResolver} from './auth/auth'

export enum authType {
  web_client = 'web_client',
}

//
export const resolvers = [
  UserResolve,
  OrderResolve,
  DataConfigResolver,
  DictResolver,
  CategoryResolver,
  PromoCodeResolver,
  AuthResolver,
]

