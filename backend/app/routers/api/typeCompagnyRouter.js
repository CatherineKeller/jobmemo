const debug = require('debug')('jobmemo:typeCompagny');

const { Router } = require('express');
const { typeCompagnyController } = require('../../controllers/api');

const controllerHandler = require('./controllerHandler');

// Création du router principal
const router = Router();

router.get('/typescompagny', controllerHandler(typeCompagnyController.getAllTypesCompagny));

module.exports = router;
