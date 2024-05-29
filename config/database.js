// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mi_proyecto', 'Sergio', 'proyecto2024', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
