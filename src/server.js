import bodyParser from 'body-parser'
import express from "express";
import user from './control/user'
import { connectDB } from './mongoData'
import { getServer } from "./schema";
import { resolveApp } from './common/pathConfig'
import errorHandle, { catchErr } from './common/error'
import { tokenHandle } from './common/tokenHandle'

var app = express();

app.set('view engine', 'html')
app.use(express.static(resolveApp('build')))
app.use(bodyParser.json())
const init = async () => {
  try {
    await connectDB()
    const server = getServer()

    server.applyMiddleware({ app, path: '/graphQL' })

    app.use('/api/login', catchErr(user.login))

    app.use('/api(/*)?', tokenHandle)

    server.applyMiddleware({ app, path: '/api' })

    app.use('*', function(req, res) {
      res.sendFile(resolveApp('build/index.html'))
    })

    app.use(errorHandle)

    app.listen(4460);
    console.log('Running a GraphQL APP server at localhost:4460');
  } catch (e) {
    console.log(e)
  }
}

init()

