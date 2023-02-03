require('dotenv').config(); // variables d'environnement

const path = require('path');
const debug = require('debug')('jobmemo:server');
const express = require('express'); // express
const expressSwagger = require('express-jsdoc-swagger');
const multer = require('multer');
const cors = require('cors'); // cors
const router = require('./app/routers'); // router
const logger = require('./app/helpers/logger');

const app = express();
const PORT = process.env.PORT || 3000;

// On autorise les requêtes Cross-Origin
app.use(cors({
  origin: '*', // on autorise tout le monde
}));

const swaggerOptions = {
  info: {
    version: '1.0.0',
    title: 'Jobmemo API',
  },
  // Base directory which we use to locate your JSDOC files
  baseDir: path.join(__dirname, 'app'),
  // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
  filesPattern: './**/*.js',
  // URL where SwaggerUI will be rendered
  swaggerUIPath: '/api-docs',
  // Expose OpenAPI UI
  exposeSwaggerUI: true,
  // Expose Open API JSON Docs documentation in `apiDocsPath` path.
  exposeApiDocs: false,
  // Open API JSON Docs endpoint.
  apiDocsPath: '/v3/api-docs',
  // Set non-required fields as nullable by default
  notRequiredAsNullable: false,
  // You can customize your UI options.
  // you can extend swagger-ui-express config. You can checkout an example of this
  // in the `example/configuration/swaggerOptions.js`
  swaggerUiOptions: {},
  // multiple option in case you want more that one instance
  multiple: true,
};
expressSwagger(app)(swaggerOptions);

const bodyParser = multer();
// Body parsing middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.none());

// Public
app.use(express.static('./dist'));

// Routage
app.use(router);

app.listen(PORT, () => {
  debug(`App listening on port http://localhost:${PORT}`);
  logger.info(`App listening on port http://localhost:${PORT}`);
});
