const { identificarConsumidor } = require('../services/consumidorService');

const identificar = (req, res) => {
  try {
    const consumidor = req.headers['consumidor'];
    const mensaje = identificarConsumidor(consumidor);
    res.json({ mensaje });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { identificar };