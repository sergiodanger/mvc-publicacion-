const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const publicarController = require('../controllers/publicarController');

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
router.post('/', upload.fields([{ name: 'imagen1', maxCount: 1 }, { name: 'imagen2', maxCount: 1 }]), publicarController.procesarFormulario);

module.exports = router;
