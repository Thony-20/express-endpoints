const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const { num1, num2 } = req.query;
    
    if (num1 === undefined || num2 === undefined) {
        return res.status(400).json({ error: 'Debes proporcionar ambos parámetros: num1 y num2' });
    }
    
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);
    
    if (isNaN(numero1) || isNaN(numero2)) {
        return res.status(400).json({ error: 'Los parámetros deben ser números válidos' });
    }
    
    const resultado = numero1 + numero2;
    res.json({
        operacion: 'suma',
        num1: numero1,
        num2: numero2,
        resultado: resultado
    });
});

module.exports = router;