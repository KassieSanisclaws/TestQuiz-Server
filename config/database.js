const { Sequelize } = require("sequelize");
const mssql = require("mssql");
const dotenv = require("dotenv");

//DotEnv config holding the keys of the sequelize connection.//
dotenv.config();

const dbConnection = mssql.connect({
    database: process.env.MSSQL_DB,
    password: process.env.PASSWORD,
    username: process.env.USERNAME,
    server: process.env.HOST,
    dialect: process.env.DIALECT_MSSQ,  
    port: process.env.MSSQL_DB_PORT,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    trustServerCertificate: true
});

dbConnection.connect(function(error){
    if(error) throw error;
    console.log("My SQL Database Connected Successfully")
})

//Connection keys defined.//
// const dbConnection = new Sequelize(
//     {
//       host: process.env.HOST,
//       dialect: process.env.DIALECT_MSSQ,
//       username: process.env.USERNAME,
//       password: process.env.PASSWORD,
//       database: process.env.MSSQL_DB,
//       port: process.env.MSSQL_DB_PORT,
//       options: { trustedConnection: true }
// });

//Handle dbConnection test & test connection error .//
//  dbConnection.authenticate().then(()=>{
//     console.log("My SQL Databse Connected Successfully!");
//  }).catch((error)=>{
//     console.error("Unable To Connect To The DataBase:", error);
//  });

module.exports = dbConnection;  

