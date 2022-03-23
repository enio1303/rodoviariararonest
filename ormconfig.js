module.exports = {
  "type": "postgres",
  "host": process.env.TYPEORM_HOST,
  "port": process.env.TYPEORM_PORT,
  "username": process.env.TYPEORM_USERNAME,
  "password": process.env.TYPEORM_PASSWORD,
  "database": process.env.TYPEORM_DATABASE,
  "synchronize": false,
  "logging": false,
  "entities": [
    process.env.NODE_ENV === 'development' ?
      "src/models/**/*Entity.js" :
      "dist/models/**/*Entity.js"
  ],
  "migrations": ["src/migration/*.js"],
  "subscribers": ["src/subscriber/**/*.js"],
  "cli": {
    "entitiesDir": "src/models",
    "migrationsDir": "src/migration",
    "subscribersDir": "src/subscriber"
  }
}
