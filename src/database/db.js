const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'Azure_app_service_data',//database name
    'postgres', // username
    'welcome@123', //password
    {
        host: 'localhost',
        dialect: 'postgres',
        dialectOptions:{
            ssl:true
        },
    }
)

module.exports = sequelize;