import { merge } from 'lodash'
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express'
import fs from 'fs'
import jsonwebtoken from 'jsonwebtoken'
import { secret } from './jwtConfig'
import { resolveApp, distPath } from './common/pathConfig'

const schemaFiles = fs.readdirSync(resolveApp(`${distPath}/schema`))

const getServer = async () => {
  const schemas = await Promise.all(schemaFiles.map(e => import(resolveApp(`${distPath}/schema/${e}`))))

  const schema = makeExecutableSchema({
    typeDefs: schemas.map(e => e.typeDefs),
    resolvers: merge(...schemas.map(e => e.resolvers)),
  })
  return new ApolloServer({
    schema,
    context: ({ req }) => {
      if (req.headers.authorization) {
        const parts = req.headers.authorization.split(' ');
        const decoded = jsonwebtoken.verify(parts[1], secret)
        return req
      }
    }
  });
}

module.exports = {
  getServer
}
