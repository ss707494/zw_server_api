import { MongoClient, ObjectId } from 'mongodb'

// import bcrypt from 'bcrypt'
// console.log(bcrypt.hashSync('123456', 6))
// console.log(bcrypt.compareSync('12345s', '$2b$06$DjszfSb5EZ/rvePqDYg47O5XuZDsCV13baSr6k55Y5JpnU024ltGC'))

const MONGO_URL = 'mongodb://localhost:27744'
const DB_NAME = 'graphql'
let db = null

export const connectDB = async () => {
  db = (await MongoClient.connect(MONGO_URL, {
    useNewUrlParser: true
  })).db(DB_NAME)
  console.log('connect database... OK')
}

export const getDb = () => {
  return db
}

export default {
  getDb,
  connectDB,
}
