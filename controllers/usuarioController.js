const Usuario = require('../models/Usuario');

exports.getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).send('Error al obtener los usuarios');
    }
};

exports.createUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).send('Error al crear el usuario');
    }
};

exports.getUsuarioById = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) {
            return res.status(404).send('Usuario no encontrado');
        }
        res.json(usuario);
    } catch (error) {
        res.status(500).send('Error al obtener el usuario');
    }
};

exports.updateUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) {
            return res.status(404).send('Usuario no encontrado');
        }
        await usuario.update(req.body);
        res.json(usuario);
    } catch (error) {
        res.status(500).send('Error al actualizar el usuario');
    }
};

exports.deleteUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) {
            return res.status(404).send('Usuario no encontrado');
        }
        await usuario.destroy();
        res.send('Usuario eliminado');
    } catch (error) {
        res.status(500).send('Error al eliminar el usuario');
    }
};
