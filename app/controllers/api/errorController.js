const debug = require('debug')('jobmemo:errorController');
const logger = require('../../helpers/logger');
const NotFoundError = require('../../errors/NotFoundError');

const cadexErrorController = {
  error404(_, res, next) {
    const error = new NotFoundError();
    next(error);
  },
  // eslint-disable-next-line no-unused-vars
  errorHandler(err, req, res, next) {
    logger.error(err.originalError?.message || err.message);
    debug(err.originalError?.message || err.message);
    let status = err.statusCode || 500;
    let { message } = err;
    if (err.name === 'ValidationError') {
      status = 400;
      message = 'Les données transmises ne sont pas valides';
    }
    res.status(status).json({ error: message });
  },
};

module.exports = cadexErrorController;
