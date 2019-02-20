import bodyParser from 'body-parser'
import express from "express";
import jwt from "express-jwt";
import user from './control/user'
import { connectDB } from './mongoData'
import { getServer } from "./schema";
import { secret } from './jwtConfig'

var app = express();

app.use(express.static('build'))
app.use(bodyParser.json())
const init = async () => {
  try {
    await connectDB()
    const server = await getServer()

    server.applyMiddleware({ app, path: '/graphQL' })

    app.use(jwt({ secret }).unless({ path: ['/api/login'] }))
    // 登录接口
    app.use('/api/login', user.login)
    // app.use('*', function(req, res, next) {
    //   const parts = req.headers.authorization.split(' ');
    //   jsonwebtoken.verify(parts[1], secret, function(err, decoded) {
    //     req.body = {
    //       ...req.body,
    //       ...decoded
    //     }
    //     next()
    //   })
    // });
    server.applyMiddleware({ app, path: '/api' })

    app.use(function(err, req, res) {
      if (err.name === 'UnauthorizedError') {
        res.status(401).send('invalid token...');
      }
    });

    app.listen(4460);
    console.log('Running a GraphQL APP server at localhost:4460');
  } catch (e) {
    console.log(e)
  }
}

init()

