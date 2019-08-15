import bodyParser from 'body-parser'
import express from "express";
import user from './control/user'
import { getServer } from "./schema";
import { resolveApp } from './common/pathConfig'
import errorHandle, { catchErr } from './common/error'
import { tokenHandle } from './common/tokenHandle'
import { connectMysql } from "./mysql";

const app = express();

app.use(express.static(resolveApp('build')))
app.use(bodyParser.json())
const init = async () => {
  try {
    await connectMysql()
    const server = getServer()

    server.applyMiddleware({ app, path: '/graphQL' })

    // app.use('/mysql', function(req, res, next) {
    //   const mysql = getMysqlDb()
    //   mysql.query('select id, name from zw_project.user', (err, sqlRes) => {
    //     if (err) {
    //       console.log(err)
    //     }
    //     console.log(sqlRes)
    //     res.send(sqlRes)
    //   });
    // })
    //
    // app.use('/fileUpload', upload.single('logo'), function(req, res, next) {
    //   var file = req.file;
    //
    //   console.log('文件类型：%s', file.mimetype);
    //   console.log('原始文件名：%s', file.originalname);
    //   console.log('文件大小：%s', file.size);
    //   console.log('文件保存路径：%s', file.path);
    //
    //   res.send({ret_code: '0'});
    // })

    app.use('/api/login', catchErr(user.login))

    app.use('/api(/*)?', tokenHandle)

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

