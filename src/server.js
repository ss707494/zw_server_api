import bodyParser from 'body-parser'
import express from "express";
import user from './control/user'
import { getServer } from "./schema";
import { resolveApp } from './common/pathConfig'
import errorHandle, { catchErr } from './common/error'
import { tokenHandle } from './common/tokenHandle'
import { connectMysql } from "./mysql";
import { dealUpload } from "./common/upload";

const app = express();

app.use(express.static(resolveApp('build')))
app.use(bodyParser.json())
const init = async () => {
  try {
    await connectMysql()
    const server = getServer()

    server.applyMiddleware({ app, path: '/graphQL' })

    app.use('/api/login', catchErr(user.login))

    app.use('/api(/*)?', tokenHandle)

    dealUpload(app)

    server.applyMiddleware({ app, path: '/api' })

    app.use('*', function(req, res) {
      res.sendFile(resolveApp('build/index.html'))
    })

    app.use(errorHandle)

    app.listen(4464);
    console.log('Running a GraphQL APP server at localhost:4464');
  } catch (e) {
    console.log(e)
  }
}

init()

