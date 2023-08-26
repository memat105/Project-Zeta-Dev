const express = require('express'),
router = express.Router(),
_data = require('../controller/home')

router.get('/api',_data.getHome);

module.exports = router;