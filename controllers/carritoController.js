// controllers/carritoController.js
const Vehiculo = require('../models/Vehiculo');

let carrito = [];

exports.agregarAlCarrito = (req, res) => {
    console.log('Intentando agregar al carrito, ID:', req.body.id);
    const vehiculo = Vehiculo.getVehiculoById(req.body.id);
    if (vehiculo) {
        carrito.push(vehiculo);
        console.log('Vehículo agregado:', vehiculo);
        res.redirect('/carrito');
    } else {
        console.error('Vehículo no encontrado');
        res.status(404).send('Vehículo no encontrado');
    }
};

exports.verCarrito = (req, res) => {
    res.render('carrito', { title: 'Carrito de Compras', carrito });
};
