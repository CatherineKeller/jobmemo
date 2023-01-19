const express = require('express');

const websiteController = require('../../controllers/website/websiteController');
const websiteErrorController = require('../../controllers/website/websiteErrorController');

const router = express.Router();

router.get('/', websiteController.getHomePage);

router.use(websiteErrorController.error404);

module.exports = router;
