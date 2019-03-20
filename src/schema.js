import { merge } from 'lodash'
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express'
import fs from 'fs'
import jwt from 'jsonwebtoken'
import { importSchema } from 'graphql-import'
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas'
import { secret } from './jwtConfig'
import { resolveApp, distPath, join } from './common/pathConfig'
import { getDb } from "./mongoData"

const typeDefs = mergeTypes(fileLoader(join(__dirname, 'schema/**/*.graphql')), {all: true})
const resolvers = mergeResolvers(fileLoader(join(__dirname, 'resolver/**/*.js'), { extensions: ['.js'] }))

const context = (data) => {
  const { req } = data
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

const getServer = () => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  })
  return new ApolloServer({
    schema,
    context,
  });
}

module.exports = {
  getServer
}
