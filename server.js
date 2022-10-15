const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { Sequelize } = require("sequelize");
const mssql = require("mssql");

//DotEnv- //
dotenv.config();
   
//Create express app.//
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Header", "Content-Type, Acceptm X-Requested-With, Origin");                                                                                        
    next();
});

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

dbConnection.connect.then(()=>{
    console.log("My SQL Database Connected Successfully")
}).catch((error)=>{
  console.log(error);
})


//Api-Routes.//
//working on api route.
// const test1Questions = require("");

//Error-Message Handler On Server.//                                                                                                                                                                                                   
app.use((err, req, res, next) => {                                                                                                                                                                                                                                                                        
    res.status(500).send({ message: err.message });                           
});              

//Server Route Connection-(respond on successful connection).//
app.get("/", (req, res) => {
    res.send("Server Is Ready");
});

//Server Port Listening-On/ Serving-On.//
const port = process.env.PORT || 54441;
app.listen(port, () => {
    console.log(`Server Is Ready At http://localhost:${port}`);
});

module.exports = app;
