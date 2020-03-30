module.exports = {
  "name": "default",
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "ss123",
  "database": "dw_server",
  "synchronize": false,
  "logging": false,
  "entities": [
    "../../../dist/entity/*.js",
  ],
  "subscribers": [
    "../../../dist/subscriber/*.js",
  ],
  "migrations": [
    "../../../dist/migration/*.js",
  ],
  "cli": {
    "entitiesDir": "../../../src/entity",
    "migrationsDir": "../../../src/migration",
    "subscribersDir": "../../../src/subscriber",
  },
}
