const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');

exports.mostrarLogin = (req, res) => {
    res.render('login', { title: 'Iniciar Sesión' });
};

exports.procesarLogin = async (req, res) => {
    const { username, password } = req.body;
    const usuario = await Usuario.findOne({ where: { username } });

    if (usuario && bcrypt.compareSync(password, usuario.password)) {
        req.session.user = { username: usuario.username, tipo_perfil_id: usuario.tipo_perfil_id };
        res.redirect('/');
    } else {
        res.status(401).send('Nombre de usuario o contraseña incorrectos');
    }
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/login');
};
