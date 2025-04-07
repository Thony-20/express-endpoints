const express = require('express');
const { identificar } = require('../controllers/consumidorController');
const router = express.Router();

router.get('/', identificar);

module.exports = router;