const express = require('express');
const { handle404 } = require('./middlewares/errorHandlers');
const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use('/', require('./routes/homeRoutes'));       // Nueva ruta para el home
app.use('/sumar', require('./routes/sumaRoutes'));
app.use('/saludar', require('./routes/saludoRoutes'));
app.use('/consumidor', require('./routes/consumidorRoutes'));

// Manejo de errores 
app.use(handle404);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});