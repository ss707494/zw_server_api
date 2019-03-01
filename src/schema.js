import { merge } from 'lodash'
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express'
import fs from 'fs'
import jwt from 'jsonwebtoken'
import { importSchema } from 'graphql-import'
import { secret } from './jwtConfig'
import { resolveApp, distPath } from './common/pathConfig'
import { getDb } from "./mongoData"

const allFiles = fs.readdirSync(resolveApp(`${distPath}/schema`))
const schemaFiles = allFiles.filter(e => e.includes('.graphql') || e.includes('gql'))
const resolverFiles = allFiles.filter(e => e.includes('.js'))

const getServer = async () => {
  const schemas = await Promise.all(schemaFiles.map(e => importSchema(resolveApp(`${distPath}/schema/${e}`))))
  const resolvers = await Promise.all(resolverFiles.map(e => import(resolveApp(`${distPath}/schema/${e}`))))

  const schema = makeExecutableSchema({
    typeDefs: schemas.map(e => e),
    resolvers: merge(...resolvers.map(e => e.resolvers)),
  })
  return new ApolloServer({
    schema,
    context: ({ req }) => {
      if (req.headers.authorization) {
        const parts = req.headers.authorization.split(' ');
        let decoded = null
        try {
           decoded = jwt.verify(parts[1], secret)
        } catch (e) {
          console.log(e)
        }
        return {
          decoded,
          db: getDb(),
        }
      }
      return {
        db: getDb(),
      }
    }
  });
}

module.exports = {
  getServer
}
