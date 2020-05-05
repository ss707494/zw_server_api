import {buildSchema} from "type-graphql"
import jwt from 'jsonwebtoken'
import {ApolloServer} from "apollo-server-express"
import {secret} from "../jwtConfig"
import {createConnection, getConnectionOptions} from "typeorm"
import {User} from "../entity/User"
import {resolvers} from "./resolver"
import {ormDatabaseConfig} from '../config/database'
import {customAuthChecker} from './common/customAuthChecker'

export type ContextType = {
  user?: User
}

const context = (data):ContextType => {
  const { req } = data
  if (req.headers.authorization) {
    const parts = (req.headers.authorization).split(' ')
    let user = null
    try {
      user = jwt.verify(parts[1], secret) as User
    } catch (e) {
      console.log(e)
      return {}
    }
    return {
      user,
    }
  }
  return {
  }
}

export const getServerByType__Graphql = async () => {
  const schemaType = await buildSchema({
    resolvers,
    dateScalarMode: "timestamp",
    validate: false,
    nullableByDefault: true,
    authChecker: customAuthChecker,
    // scalarsMap: [{
    //   type: Object,
    //   scalar: JsonScalar,
    // }],
    // automatically create `schema.gql` file with schema definition in current folder
    // emitSchemaFile: path.resolve(__dirname, "schemaType.gql"),
  })
  return new ApolloServer({
    schema: schemaType,
    context,
  })
}

export const dealAppByType__Graphql = async (app) => {
  const connectionOptions = await getConnectionOptions()
  await createConnection({
    ...connectionOptions,
    ...ormDatabaseConfig(),
  }) // typeorm

  const serverByType__Graphql = await getServerByType__Graphql()

  // serverByType__Graphql.applyMiddleware({app, path: '/type__graphql/graphQL'})

  // app.use('/type__graphql/api', tokenHandle)

  serverByType__Graphql.applyMiddleware({app, path: '/type__graphql/api'})

}
