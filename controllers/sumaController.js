const { sumarNumeros } = require('../services/sumaService');

const sumar = (req, res) => {
  try {
    const { num1, num2 } = req.query;
    const resultado = sumarNumeros(parseFloat(num1), parseFloat(num2));
    res.json({ resultado });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { sumar };