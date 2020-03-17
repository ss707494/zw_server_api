import {buildSchema} from "type-graphql"
import jwt from 'jsonwebtoken'
import {ApolloServer} from "apollo-server-express"
import {secret} from "../jwtConfig"
import {tokenHandle, UnauthorizedError} from "../common/tokenHandle"
import {createConnection} from "typeorm"
import {User} from "../entity/User"
import {resolvers} from "./resolver"

export type Context = {
  user?: User
}

const context = (data):Context => {
  const { req } = data
  if (req.headers.authorization) {
    const parts = (req.headers.authorization).split(' ')
    let user = null
    try {
      user = jwt.verify(parts[1], secret) as User
    } catch (e) {
      console.log(e)
      throw new UnauthorizedError('invalid_token', { ...e, message: 'invalid_token' })
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
    // automatically create `schema.gql` file with schema definition in current folder
    // emitSchemaFile: path.resolve(__dirname, "schemaType.gql"),
  })
  return new ApolloServer({
    schema: schemaType,
    context,
  })
}

export const dealAppByType__Graphql = async (app) => {

  await createConnection() // typeorm

  const serverByType__Graphql = await getServerByType__Graphql()

  serverByType__Graphql.applyMiddleware({app, path: '/type__graphql/graphQL'})

  app.use('/type__graphql/api', tokenHandle)

  serverByType__Graphql.applyMiddleware({app, path: '/type__graphql/api'})

}
