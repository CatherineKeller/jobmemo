const debug = require('debug')('jobmemo:listRouter');

const { Router } = require('express');
const { listController } = require('../../controllers/api');

const controllerHandler = require('./controllerHandler');

// Création du router principal
const router = Router();

/**
 * GET /api/lists
 * @summary Get all jobs
 *
 * @return {job} 200 - success response
 * @return {error} 400 - bad request
 */
debug('adding GET /lists route');
router.get('/lists', controllerHandler(listController.getAllLists));

module.exports = router;
