const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mssql = require("mssql/msnodesqlv8");

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

const dbConnection = new mssql.ConnectionPool({
    database: process.env.MSSQL_DB,  
    server: process.env.SERVER,
    user: process.env.USER,           
    password: process.env.PASSWORD,                                            
    port: process.env.MSSQL_DB_PORT,  
    options: {  
    trustedconnection: true,     
    enableArithAbort: true,
    trustServerCertificate: true,      
},         
  
});

 dbConnection.connect(function(error){
     if(error) throw error,  console.error("Unable to connect to dataBase Sorry.", error);{
        console.log("My SQL Database Connected Successfully"); 
     }
 });
       
 
   
  
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
