const debug = require('debug')('jobmemo:controllerHandler');

module.exports = (controller) => {
  debug(`Create contoller handler for ${controller.name}`);
  return async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};
