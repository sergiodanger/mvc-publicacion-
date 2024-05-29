// models/Transmision.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('config/database.js');

const Transmision = sequelize.define('Transmision', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tipo: DataTypes.STRING
}, {
    timestamps: false
});

module.exports = Transmision;
