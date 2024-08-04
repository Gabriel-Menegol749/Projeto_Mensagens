const { Sequelize } = require('sequelize');
const dbConfig = require('./src/config/database');

const sequelize = new Sequelize(dbConfig);


module.exports = connection;