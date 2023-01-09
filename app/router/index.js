const { Router } = require('express');
const { mainController } = require ('../controllers');
const cw = require('./controllerWrapper');

// Création du router principal
const router = Router();

router.get('/', cw(mainController.home));

// router.use(mainController.notFound);

module.exports = router;
