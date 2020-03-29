export const databaseConfig = () => ({
  connectionLimit: 10,
  host: process.env.DATABASE_HOST ?? 'localhost',
  port: process.env.DATABASE_PORT ?? '3307',
  user: process.env.DATABASE_USERNAME ?? 'root',
  password: process.env.DATABASE_PASSWORD ?? '',
})

export const ormDatabaseConfig = () => ({
  host: process.env.DATABASE_HOST ?? 'localhost',
  port: ~~process.env.DATABASE_PORT ?? 3307,
  user: process.env.DATABASE_USERNAME ?? 'root',
  password: process.env.DATABASE_PASSWORD ?? '',
})
