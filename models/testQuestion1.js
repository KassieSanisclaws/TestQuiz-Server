const { Sequelize, DataTypes } = require("sequelize");
const dbConnect = require("../config/database");

const TestOneQuestion = dbConnect.define("TestOneQuestions",{
       id:{
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
       question: {
            type: DataTypes.STRING,
            allowNul: false,
       },
       selections:{
            type: DataTypes.STRING,
       }
}) 

module.exports = TestOneQuestion;