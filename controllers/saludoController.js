const { generarSaludo } = require('../services/saludoService');

const saludar = (req, res) => {
  try {
    const { name } = req.body;
    const mensaje = generarSaludo(name);
    res.json({ mensaje });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { saludar };