import {UserResolve} from "./user/user"
import {OrderResolve} from "./order/order"
import {DataConfigResolver} from "./dataConfig/dataConfig"
import {DictResolver} from "./dict/dict"
import {CategoryResolver} from "./category/category"
import {PromoCodeResolver} from './promoCode/promoCode'
import {AuthResolver} from './auth/auth'
import {UserPayCardResolve} from './userPayCard/userPayCard'
import { UserAddressResolve } from "./userAddress/userAddress"
import {ShopCartResolver} from './shopCart/shopCart'
import {ProductResolver} from './product/product'

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
  UserPayCardResolve,
  UserAddressResolve,
  ShopCartResolver,
  ProductResolver,
]

