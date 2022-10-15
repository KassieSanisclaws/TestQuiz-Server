 const dotenv = require("dotenv");
  
 dotenv.config();
 
 module.exports = {
    "development": {
      "username" : process.env.USERNAME,
      "password" : process.env.PASSWORD,
      "database" : process.env.MSSQL_DB,
      "host"     : process.env.HOST,
      "dialect"  : process.env.DIALECT_MSSQ,
      "port"     : process.env.MSSQL_DB_PORT,
    },
    "test": {
      "username": process.env.USERNAME,
      "password": process.env.PASSWORD,
      "database": process.env.MSSQL_DB,
      "host"    : process.env.HOST,
      "dialect" : process.env.DIALECT_MSSQ
    },
    "production": {
      "username": process.env.USERNAME,
      "password": process.env.PASSWORD,
      "database": process.env.MSSQL_DB,
      "host"    : process.env.HOST,
      "dialect":  process.env.DIALECT_MSSQ
    }
  }