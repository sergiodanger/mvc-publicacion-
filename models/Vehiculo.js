const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const vehiculos = [];

const loadVehiculos = () => {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, '../vehiculo.csv'))
      .pipe(csv())
      .on('data', (data) => vehiculos.push(data))
      .on('end', () => resolve(vehiculos))
      .on('error', (error) => reject(error));
  });
};

const getVehiculosByMarca = (marca) => {
  return vehiculos.filter((vehiculo) => vehiculo.marca.toLowerCase() === marca.toLowerCase());
};

const getVehiculosByModelo = (modelo) => {
  return vehiculos.filter((vehiculo) => vehiculo.modelo.toLowerCase() === modelo.toLowerCase());
};

module.exports = {
  loadVehiculos,
  getVehiculosByMarca,
  getVehiculosByModelo,
  vehiculos
};
