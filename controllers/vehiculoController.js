const fs = require('fs');
const csv = require('csv-parser');

const vehiculos = [];

// Cargar datos de vehiculo.csv
fs.createReadStream('vehiculo.csv')
    .pipe(csv())
    .on('data', (data) => vehiculos.push(data))
    .on('end', () => {
        console.log('Vehículos cargados desde vehiculo.csv');
    });

exports.searchVehiculos = (req, res) => {
    try {
        const query = req.query.query.toLowerCase();
        const results = vehiculos.filter(vehiculo => 
            vehiculo.Marca.toLowerCase().startsWith(query) ||
            vehiculo.Modelo.toLowerCase().startsWith(query)
        );
        res.json(results);
    } catch (error) {
        res.status(500).send('Error al buscar vehículos');
    }
};

exports.getVehiculoById = (req, res) => {
    try {
        const vehiculo = vehiculos.find(v => v.id === req.params.id);
        if (!vehiculo) {
            return res.status(404).send('Vehículo no encontrado');
        }
        res.render('vehiculo', { title: 'Detalles del Vehículo', vehiculo });
    } catch (error) {
        res.status(500).send('Error al obtener el vehículo');
    }
};

exports.updateVehiculo = (req, res) => {
    try {
        const vehiculoIndex = vehiculos.findIndex(v => v.id === req.params.id);
        if (vehiculoIndex === -1) {
            return res.status(404).send('Vehículo no encontrado');
        }
        vehiculos[vehiculoIndex] = req.body;
        res.json(vehiculos[vehiculoIndex]);
    } catch (error) {
        res.status(500).send('Error al actualizar el vehículo');
    }
};

exports.deleteVehiculo = (req, res) => {
    try {
        const vehiculoIndex = vehiculos.findIndex(v => v.id === req.params.id);
        if (vehiculoIndex === -1) {
            return res.status(404).send('Vehículo no encontrado');
        }
        vehiculos.splice(vehiculoIndex, 1);
        res.send('Vehículo eliminado');
    } catch (error) {
        res.status(500).send('Error al eliminar el vehículo');
    }
};
