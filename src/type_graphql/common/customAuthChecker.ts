import {AuthChecker} from 'type-graphql'
import {ContextType} from '../apploServer'
import { AuthenticationError } from 'apollo-server-express';
import {authType} from '../resolver'

export const customAuthChecker: AuthChecker<ContextType> = async (
    { root, args, context, info },
    roles,
) => {
  if (!context?.user) {
    if (roles.includes(authType.web_client)) return true
    if (process.env.NODE_ENV === 'production') {
    }
    throw new AuthenticationError('first')
  }
  console.log(context?.user)
  // here we can read the user from context
  // and check his permission in the db against the `roles` argument
  // that comes from the `@Authorized` decorator, eg. ["ADMIN", "MODERATOR"]

  return true; // or false if access is denied
};
