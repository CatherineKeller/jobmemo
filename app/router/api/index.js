const { Router } = require('express');
const { mainController, cardController, listController } = require('../../controllers/api');

const controllerHandler = require('./controllerHandler');
const cadexErrorController = require('../../controllers/api/errorController');

// Création du router principal
const router = Router();

router.get('/', controllerHandler(mainController.home));

router.post('/card/add', controllerHandler(cardController.createCard));

router.get('/cards', controllerHandler(cardController.getAllCards));

router.get('/lists', controllerHandler(listController.getAllLists));

// Display Errors
router.use(cadexErrorController.error404);
router.use(cadexErrorController.errorHandler);

module.exports = router;
