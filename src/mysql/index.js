import mysql from 'mysql'
import { databaseConfig } from "../../config/database";

let db = null

export const connectMysql = () => {
  db = mysql.createConnection(databaseConfig)
  db.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }

    console.log('connected as id ' + db.threadId);
  });
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
  return new Promise((resolve, reject) => {
    db.query(sql, values, (err, res) => {
      if (err) {
        console.log(`mysql:::::::ss:: ${err}`)
        reject(err)
      }
      resolve(res)
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
