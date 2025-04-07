const express = require('express');
const { sumar } = require('../controllers/sumaController');
const router = express.Router();

router.get('/', sumar);

module.exports = router;