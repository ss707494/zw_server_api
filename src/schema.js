import { merge } from 'lodash'
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express'
import fs from 'fs'
import path from 'path'
import jsonwebtoken from 'jsonwebtoken'
import { secret } from './jwtConfig'

const distPath = process.env.NODE_ENV === 'production'? 'dist' : 'src'

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

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
