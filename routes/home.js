const express = require('express'),
router = express.Router(),
_data = require('../controller/home')

router.get('/',_data.getHome);

module.exports = router;