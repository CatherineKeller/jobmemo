const debug = require('debug')('jobmemo:validator');

/**
 * Validate datas
 * @param {object} schema - the schema
 * @param {string} dataSource - the data source ex: query or body (req.query)
 * @returns a function (factory) async Middleware (req, res, next)
 */
function validate(schema, dataSource) {
  debug('create a customized validation middleware');
  return async (request, response, next) => {
    debug('anonymous mw for validation');
    try {
      await schema.validateAsync(request[dataSource]);
      next();
    } catch (err) {
      next(err);
    }
  };
}

module.exports = validate;
