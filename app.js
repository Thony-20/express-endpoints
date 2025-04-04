const express = require('express');
const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json()); // Para parsear JSON en el body

// Importar rutas
const sumarRouter = require('./routes/sumar');
const saludarRouter = require('./routes/saludar');
const consumidorRouter = require('./routes/consumidor');

// Configurar rutas
app.use('/sumar', sumarRouter);
app.use('/saludar', saludarRouter);
app.use('/consumidor', consumidorRouter);

// Ruta de inicio
app.get('/', (req, res) => {
    res.json({
        mensaje: 'Bienvenido a la API de ejemplo',
        endpoints: {
            sumar: {
                metodo: 'GET',
                url: '/sumar?num1=X&num2=Y',
                descripcion: 'Suma dos números recibidos por query params'
            },
            saludar: {
                metodo: 'POST',
                url: '/saludar',
                body: { "name": "Nombre" },
                descripcion: 'Saluda al nombre recibido en el body'
            },
            consumidor: {
                metodo: 'GET',
                url: '/consumidor',
                headers: { "consumidor": "NombreDepartamento" },
                descripcion: 'Identifica al consumidor por headers'
            }
        }
    });
});

// Manejo de errores para rutas no encontradas
app.use((req, res) => {
    res.status(404).json({ 
        error: 'Ruta no encontrada',
        sugerencia: 'Visita GET / para ver los endpoints disponibles'
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});