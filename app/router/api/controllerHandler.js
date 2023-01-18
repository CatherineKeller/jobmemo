// const logger = require('../helpers/logger');

module.exports = (controller) => async (req, res, next) => {
  try {
    await controller(req, res, next);
  } catch (err) {
    next(err);
  }
};
