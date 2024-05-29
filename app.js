const express = require('express');
const morgan = require('morgan');
const path = require('path');
const sequelize = require('./config/database');
const usuarioRoutes = require('./routes/usuarioRoutes');
const vehiculoRoutes = require('./routes/vehiculoRoutes');
const authRoutes = require('./routes/authRoutes');
const carritoRoutes = require('./routes/carritoRoutes');
const venderRoutes = require('./routes/venderRoutes');
const publicarRoutes = require('./routes/publicarRoutes');
const Vehiculo = require('./models/Vehiculo');

const app = express();

// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para logging
app.use(morgan('dev'));

// Middleware para análisis de cuerpo de la solicitud
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para manejar sesiones
const session = require('express-session');
app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: true,
}));

// Middleware para pasar usuario a todas las vistas
app.use((req, res, next) => {
    res.locals.user = req.session.user;
    next();
});

// Rutas
app.use('/auth', authRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/vehiculos', vehiculoRoutes);
app.use('/carrito', carritoRoutes);
app.use('/vender', venderRoutes);
app.use('/publicar', publicarRoutes);

app.get('/', (req, res) => {
    res.render('index', { title: 'Dashboard' });
});

app.get('/login', (req, res) => {
    res.render('login', { title: 'Iniciar Sesión' });
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard', { title: 'Dashboard' });
});

app.get('/vehiculos', (req, res) => {
    res.render('vehiculos', { title: 'Vehículos' });
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

// Sincronizar base de datos y arrancar el servidor
sequelize.sync().then(async () => {
    await Vehiculo.loadVehiculos();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
}).catch(err => console.log(err));
