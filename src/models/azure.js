const { values } = require('lodash');
const Sequelize = require('sequelize');
const db = require('../database/db');

const Azure=db.define('azure',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull: false,
        primaryKey: true
    },
    MetricName: {
        type: Sequelize.STRING,
        allowNull: true,
        
    },
    count: {
        type: Sequelize.INTEGER,
        allowNull:true
    },
    avg: {
        type:Sequelize.FLOAT,
        allowNull:true
    },
    TimeGenerated : {
        type:Sequelize.DATEONLY,
        allowNull: true
        
    },
    max :{
        type:Sequelize.FLOAT,
        allowNull:true
    },
    min :{
        type:Sequelize.FLOAT,
        allowNull:true
    }
});

module.exports = Azure;