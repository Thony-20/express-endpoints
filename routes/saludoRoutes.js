const express = require('express');
const { saludar } = require('../controllers/saludoController');
const router = express.Router();

router.post('/', saludar);

module.exports = router;