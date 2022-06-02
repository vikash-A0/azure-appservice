const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'postgres',//database name
    'amadis_dbuser@cloudcadi-db-dev', // username
    'uR33sUXM', //password
    {
        host: 'localhost',
        dialect: 'postgres',
        dialectOptions:{
            ssl:true
        },
    }
)

module.exports = sequelize;