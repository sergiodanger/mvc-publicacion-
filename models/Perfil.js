// models/Perfil.js
import { DataTypes } from 'sequelize';
import sequelize from 'config/database.js';

const Perfil = sequelize.define('Perfil', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tipo: DataTypes.STRING
}, {
    timestamps: false
});

export default Perfil;
