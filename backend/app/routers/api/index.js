const debug = require('debug')('jobmemo:apiRouter');

const { Router } = require('express');
const { cardController, listController } = require('../../controllers/api');

const controllerHandler = require('./controllerHandler');
const cadexErrorController = require('../../controllers/api/errorController');

const validate = require('../../validation/validator');
const { post: jobPostSchema } = require('../../validation/schemas/card.schema');

// Création du router principal
const router = Router();

// router.post('/card/add', controllerHandler(cardController.createCard));
router.post('/card/add', validate(jobPostSchema, 'body'), controllerHandler(cardController.createCard));

router.get('/cards', controllerHandler(cardController.getAllCards));

/**
 * GET /api/lists
 * @summary Get all jobs
 *
 * @return {job} 200 - success response
 * @return {error} 400 - bad request
 */
debug('adding GET /lists route');
router.get('/lists', controllerHandler(listController.getAllLists));

// Display Errors
router.use(cadexErrorController.error404);
router.use(cadexErrorController.errorHandler);

module.exports = router;
