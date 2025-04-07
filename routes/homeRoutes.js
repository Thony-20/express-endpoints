const express = require('express');
const { getHomeInfo } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomeInfo);

module.exports = router;