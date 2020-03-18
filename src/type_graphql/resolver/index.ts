import {UserResolve} from "./user/user"
import {OrderResolve} from "./order/order"
import {DataConfigResolver} from "./dataConfig/dataConfig"

//
export const resolvers = [
  UserResolve,
  OrderResolve,
  DataConfigResolver,
]
