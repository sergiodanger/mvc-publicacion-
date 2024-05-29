// routes/venderRoutes.js
const express = require('express');
const router = express.Router();
const venderController = require('../controllers/venderController');

router.get('/', venderController.mostrarFormulario);
router.post('/', venderController.procesarFormulario);

module.exports = router;
