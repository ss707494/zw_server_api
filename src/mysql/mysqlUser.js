import mysql from 'mysql'

const config = {
  host: 'localhost',
  port: '3307',
  user: 'root',
  password: 'ss88913830',
}
let db = null

const connectMysql = () => {
  db = mysql.createConnection(config)
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
