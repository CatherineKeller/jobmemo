const debug = require('debug')('jobmemo:apiRouter');

const { Router } = require('express');
const listRouter = require('./listRouter');
const cardRouter = require('./cardRouter');

const jobmemoErrorController = require('../../controllers/api/errorController');

// Création du router principal
const mainRouter = new Router();

mainRouter.use(listRouter);
mainRouter.use(cardRouter);

// Display Errors
mainRouter.use(jobmemoErrorController.error404);
mainRouter.use(jobmemoErrorController.errorHandler);

module.exports = mainRouter;
