// routes/carritoRoutes.js
const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carritoController');

router.post('/agregar', carritoController.agregarAlCarrito);
router.get('/', carritoController.verCarrito);

module.exports = router;
