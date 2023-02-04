const debug = require('debug')('jobmemo:candidatcyRouter');

const { Router } = require('express');
const { candidacyController } = require('../../controllers/api');

const controllerHandler = require('./controllerHandler');

// Création du router principal
const router = Router();

debug('adding GET /candidacies route');
router.get('/candidacies', controllerHandler(candidacyController.getAllCandidacies));

module.exports = router;
