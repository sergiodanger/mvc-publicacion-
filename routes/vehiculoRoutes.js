const express = require('express');
const router = express.Router();
const vehiculoController = require('../controllers/vehiculoController');

router.get('/search', vehiculoController.searchVehiculos);  // Ruta de búsqueda abierta
router.get('/:id', vehiculoController.getVehiculoById);     // Ruta para detalles del vehículo
router.put('/:id', vehiculoController.updateVehiculo);
router.delete('/:id', vehiculoController.deleteVehiculo);

module.exports = router;
