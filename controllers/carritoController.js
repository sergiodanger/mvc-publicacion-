const Vehiculo = require('../models/Vehiculo.js');

let carrito = [];

exports.agregarAlCarrito = (req, res) => {
    const vehiculoId = req.body.id;
    if (!vehiculoId) {
        return res.status(400).send('ID de vehículo no proporcionado');
    }
    Vehiculo.findByPk(vehiculoId)
        .then(vehiculo => {
            if (vehiculo) {
                carrito.push(vehiculo);
                res.redirect('/carrito');
            } else {
                res.status(404).send('Vehículo no encontrado');
            }
        })
        .catch(error => {
            console.error('Error al agregar al carrito:', error);
            res.status(500).send('Error al agregar al carrito');
        });
};

exports.verCarrito = (req, res) => {
    res.render('carrito', { title: 'Carrito de Compras', carrito });
};