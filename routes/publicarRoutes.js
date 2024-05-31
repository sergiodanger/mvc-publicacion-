const express = require('express');
const multer = require('multer');
const path = require('path');
const publicarController = require('../controllers/publicarController');

const router = express.Router();

// Configuración de multer para manejar la subida de imágenes
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Nombre único para cada archivo
    }
});
const upload = multer({ storage: storage });

router.get('/', publicarController.mostrarFormulario);
router.post('/', upload.fields([{ name: 'imagen1', maxCount: 1 }, { name: 'imagen2', maxCount: 1 }]), function(req, res, next) {
    // Verificar si se han subido las imágenes
    if (!req.files || !req.files.imagen1 || !req.files.imagen2) {
        // Mostrar una alerta en el navegador
        return res.send('<script>alert("Debe subir las imágenes antes de publicar el vehículo."); window.history.back();</script>');
    }
    publicarController.procesarFormulario(req, res, next);
});

module.exports = router;
