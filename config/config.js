var fs = require('fs')
var path = require('path')
module.exports = {
  port: 8081,
  db: {
    database: process.env.DB_NAME || 'uberbus',
    user: process.env.DB_USER || 'uberbus',
    password: process.env.DB_PASSWORD || 'proyectoMIAg5',
    options: {
      dialect: process.env.DB_NAME || 'mysql',
      host: process.env.DB_NAME || 'mysql.trivius-systems.com',
      operatorsAliases: 'Sequelize.Op',
      logging: function (sql) {
        (fs.appendFileSync(
          'access.log',
          "query: " + sql+ " ")
        )
      }
    },
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  },
  secret: 'maestria'
}
