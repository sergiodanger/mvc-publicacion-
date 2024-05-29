// controllers/venderController.js
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');

exports.mostrarFormulario = (req, res) => {
    res.render('vender', { title: 'Crear una cuenta para vender un vehículo' });
};

exports.procesarFormulario = async (req, res) => {
    const { nombre, apellido, email, username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const nuevoUsuario = await Usuario.create({
            nombre,
            apellido,
            email,
            username,
            password: hashedPassword,
            tipo_perfil_id: 2 // Asumiendo que el perfil 2 es el de vendedor
        });

        // Redirigir a una página de inicio de sesión o a la página para vender un vehículo
        res.redirect('/login'); // Redirigir a la página de inicio de sesión
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        res.status(500).send('Algo salió mal!');
    }
};
