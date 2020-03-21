import {UserResolve} from "./user/user"
import {OrderResolve} from "./order/order"
import {DataConfigResolver} from "./dataConfig/dataConfig"
import {DictResolver} from "./dict/dict"
import {CategoryResolver} from "./category/category"

//
export const resolvers = [
  UserResolve,
  OrderResolve,
  DataConfigResolver,
  DictResolver,
  CategoryResolver,
]

