const express = require('express');
const router = express.Router();

// GET /consumidor - Identifica al consumidor por headers
router.get('/', (req, res) => {
    const consumidor = req.headers['consumidor'];
    
    // Validar que el header exista
    if (!consumidor) {
        return res.status(400).json({ 
            error: 'Debes proporcionar el header "consumidor"',
            ejemploHeaders: {
                "consumidor": "Tesorería"
            }
        });
    }
    
    // Devolver mensaje de consumo
    res.json({ 
        mensaje: `${consumidor} ha consumido este endpoint`,
        timestamp: new Date().toISOString(),
        headersRecibidos: req.headers
    });
});

module.exports = router;