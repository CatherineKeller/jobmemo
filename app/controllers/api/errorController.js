const logger = require('../../helpers/logger');
const Error404 = require('../../errors/Error404');

const cadexErrorController = {
  error404(_, res, next) {
    const error = new Error404();
    next(error);
  },
  // eslint-disable-next-line no-unused-vars
  errorHandler(err, req, res, next) {
    logger.error(err.message);
    const status = err.statusCode || 500;
    const { message } = err;
    // if (err.name === 'ValidationError') {
    //   status = 400;
    //   message = 'Les données transmises ne sont pas valides';
    // }
    res.status(status).json({ error: message });
  },
};

module.exports = cadexErrorController;
