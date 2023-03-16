const debug = require('debug')('jobmemo:apiRouter');

const { Router } = require('express');
const listRouter = require('./listRouter');
const cardRouter = require('./cardRouter');
const typeCompagnyController = require('./typeCompagnyRouter');
const candidacyController = require('./candidacyRouter');


const jobmemoErrorController = require('../../controllers/api/errorController');

// Création du router principal
const mainRouter = new Router();

mainRouter.use(listRouter);
mainRouter.use(cardRouter);
mainRouter.use(typeCompagnyController);
mainRouter.use(candidacyController);

// Display Errors
mainRouter.use(jobmemoErrorController.error404);
mainRouter.use(jobmemoErrorController.errorHandler);

module.exports = mainRouter;
