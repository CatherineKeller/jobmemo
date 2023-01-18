const bunyan = require('bunyan');
const path = require('path');

const logger = bunyan.createLogger({
  name: 'Job Memo API',
  streams: [
    {
      level: 'info',
      stream: process.stdout, // log INFO and above to stdout
    },
    {
      path: path.join(__dirname, '../../logs/errors.log'),
      level: 'error',
    }],
});

module.exports = logger;
