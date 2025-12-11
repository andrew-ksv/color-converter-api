const express = require('express');
const router = express.Router();
const convertController = require('../controllers/convertController');

router.post('/rgb-to-cmyk', convertController.convertRgbToCmyk);
router.post('/cmyk-to-rgb', convertController.convertCmykToRgb);

module.exports = router;