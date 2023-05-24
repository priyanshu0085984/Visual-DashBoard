const express = require('express');
const router = express.Router();
const Controller = require('../Controller/Home');

router.post('/',Controller.collect);

module.exports = router;