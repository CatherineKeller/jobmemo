const debug = require('debug')('jobmemo:typeCompagnyRouter');

const { Router } = require('express');
const { typeCompagnyController } = require('../../controllers/api');

const controllerHandler = require('./controllerHandler');

// Création du router principal
const router = Router();

debug('adding GET /typescompagny route');
router.get('/typescompagny', controllerHandler(typeCompagnyController.getAllTypesCompagny));

module.exports = router;
