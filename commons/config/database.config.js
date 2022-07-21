
require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": "mysql",
    "freezeTableName": true,
    "define": {
        "timestamps": false
    },
    "operatorsAliases": false,
    "timezone": 'Asia/Jakarta'
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": "mysql",
    "freezeTableName": true,
    "define": {
        "timestamps": false
    },
    "operatorsAliases": false,
    "timezone": 'Asia/Jakarta'
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": "mysql",
    "freezeTableName": true,
    "define": {
        "timestamps": false
    },
    "operatorsAliases": false,
    "timezone": 'Asia/Jakarta'
  }
}