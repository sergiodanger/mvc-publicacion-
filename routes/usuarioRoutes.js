const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const auth = require('../middleware/auth');

// Definir las rutas y sus respectivos callbacks del controlador
router.get('/', auth, usuarioController.getAllUsuarios);
router.post('/', auth, usuarioController.createUsuario);
router.get('/:id', auth, usuarioController.getUsuarioById);
router.put('/:id', auth, usuarioController.updateUsuario);
router.delete('/:id', auth, usuarioController.deleteUsuario);

module.exports = router;
