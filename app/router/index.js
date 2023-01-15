const { Router } = require('express');
const { mainController } = require ('../controllers');
const { cardController } = require ('../controllers');
const { listController } = require ('../controllers');
const cw = require('./controllerWrapper');

// Création du router principal
const router = Router();

router.get('/', cw(mainController.home));

router.post('/card/add', cw(cardController.createCard));

router.get('/cards', cw(cardController.getAllCards));

router.get('/lists', cw(listController.getAllLists));


// router.use(mainController.notFound);

module.exports = router;
