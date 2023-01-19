const express = require('express');
const apiRouter = require('./api');
const websiteRouter = require('./website');

const router = express.Router();

router.use('/api', apiRouter); // api/cadex
router.use('/', websiteRouter);

module.exports = router;
