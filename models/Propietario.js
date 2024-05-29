// models/Propietario.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('config/database.js');

const Propietario = sequelize.define('Propietario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    telefono: DataTypes.STRING
}, {
    timestamps: false
});

module.exports = Propietario;
