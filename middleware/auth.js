// middleware/auth.js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).send('Acceso denegado. No se proporcionó un token.');
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).send('Acceso denegado. No se proporcionó un token.');
    }

    try {
        const verified = jwt.verify(token, 'your_jwt_secret');
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Token no válido.');
    }
};
