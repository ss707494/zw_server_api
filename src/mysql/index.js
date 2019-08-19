import mysql from 'mysql'
import { databaseConfig } from "../config/database";

let db = null

export const connectMysql = () => {
  db = mysql.createPool(databaseConfig)
  db.on('connection', function (db) {
    console.log('connected as id ' + db.threadId);
    // connection.query('SET SESSION auto_increment_increment=1')
  })
  // db = mysql.createConnection(databaseConfig)
  // db.connect(function(err) {
  //   if (err) {
  //     console.error('error connecting: ' + err.stack);
  //     return;
  //   }
  //
  //   console.log('connected as id ' + db.threadId);
  // })
  return db
}


export const dispose = () => {
  db.end()
}

export const getMysqlDb = () => {
  if (!db) {
    return connectMysql()
  }
  return db
}

export const asyncQuery = async (sql, values = []) => {
  console.log(sql)
  return new Promise((resolve, reject) => {
    db.query(sql, values, (err, res, fields) => {
      if (err) {
        console.log(`mysql:error:::::::ss:: ${err}`)
        reject(err)
      }
      console.log(`mysql:log:::::::ss:: ${JSON.stringify(res)}`)
      resolve([res, fields])
    })
  })
}

export default {
  getMysqlDb,
  dispose,
}

// connection.query('SELECT 1 + 1 AS solution', function(error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
//
// connection.end();
