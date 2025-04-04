const express = require('express');
const router = express.Router();

// POST /saludar - Saluda al nombre recibido en el body
router.post('/', (req, res) => {
    const { name } = req.body;
    
    // Validar que el nombre exista
    if (!name) {
        return res.status(400).json({ 
            error: 'Debes proporcionar un nombre en el campo "name"',
            ejemplo: { "name": "Cristian" }
        });
    }
    
    // Validar que el nombre sea string
    if (typeof name !== 'string') {
        return res.status(400).json({ 
            error: 'El nombre debe ser una cadena de texto',
            recibido: typeof name
        });
    }
    
    // Devolver saludo personalizado
    res.json({ 
        mensaje: `¡Hola, ${name}!`,
        fecha: new Date().toISOString()
    });
});

module.exports = router;