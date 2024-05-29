// models/Publicacion.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('config/database.js');

const Publicacion = sequelize.define('Publicacion', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    vehiculo_id: DataTypes.INTEGER,
    propietario_id: DataTypes.INTEGER,
    fecha_publicacion: DataTypes.DATE
}, {
    timestamps: false
});

module.exports = Publicacion;
