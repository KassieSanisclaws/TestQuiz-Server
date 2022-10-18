const dbConfig = require("./dbConfig");
const msSQL = require("mssql");

//DotEnv config holding the keys of the sequelize connection.//
dotenv.config();

const dbConnection = {
           server: process.env.SERVER,
           dialect: process.env.DIALECT_MSSQ,
           user: process.env.USERNAME,
           password: process.env.PASSWORD,
           database: process.env.MSSQL_DB,
           port: process.env.MSSQL_DB_PORT,
       pool: { max: 10, min: 0, idleTimeoutMillis: 30000 },            
       options: { trustedConnection: true, trustServerCertificate: false }
    };

    
msSQL.connect(dbConfig).then(()=>{
    console.log("Success!");
}).catch((error)=>{
    console.log(error);
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

