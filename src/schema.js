import { ApolloServer, makeExecutableSchema } from 'apollo-server-express'
import jwt from 'jsonwebtoken'
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas'
import { secret } from './jwtConfig'
import { join } from './common/pathConfig'
import { getMysqlDb } from './mysql'
import { UnauthorizedError } from "./common/tokenHandle"

const typeDefs = mergeTypes(fileLoader(join(__dirname, 'schema/**/*.graphql')), { all: true })
const resolvers = mergeResolvers([
  ...fileLoader(join(__dirname, 'resolver/**.js'), { extensions: ['.js'] }),
  ...fileLoader(join(__dirname, 'resolver/**/resolver.js'), { extensions: ['.js'] }),
])

const context = (data) => {
  const { req } = data
  if (req.headers.authorization) {
    const parts = (req.headers.authorization).split(' ')
    let decoded = null
    try {
      decoded = jwt.verify(parts[1], secret)
    } catch (e) {
      console.log(e)
      throw new UnauthorizedError('invalid_token', { ...e, message: 'invalid_token' })
    }
    return {
      decoded,
      db: getMysqlDb(),
    }
  }
  return {
    db: getMysqlDb(),
  }
}

const getServer = () => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  })
  return new ApolloServer({
    schema,
    context,
  })
}

module.exports = {
  getServer
}
