const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL, {
        dialect: 'mysql',
        protocol: 'mysql'
    })
    } else {
        sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            protocol: 'mysql',
            ssl: true,
            logging: false,
            port: process.env.PORT || 3306
        }
    );
}

module.exports = sequelize;
