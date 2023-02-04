const debug = require('debug')('jobmemo:cardRouter');

const { Router } = require('express');
const { cardController } = require('../../controllers/api');

const controllerHandler = require('./controllerHandler');

const validate = require('../../validation/validator');
const { post: jobPostSchema } = require('../../validation/schemas/card.schema');

// Création du router principal
const router = Router();

router.get('/cards', controllerHandler(cardController.getAllCards));
router.get('/cards/:id', controllerHandler(cardController.getOneCard));
// router.post('/cards', validate(jobPostSchema, 'body'), controllerHandler(cardController.createCard));
router.post('/cards', controllerHandler(cardController.createCard));
router.patch('/cards/:id', controllerHandler(cardController.updateCard));
router.delete('/cards/:id', controllerHandler(cardController.deleteCard));

// router.get('/lists/:listId/cards', controllerHandler(cardController.getAllCardsOfList));

module.exports = router;
