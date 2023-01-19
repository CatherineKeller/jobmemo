require('dotenv').config(); // variables d'environnement
const debug = require('debug')('jobmemo:server');
const express = require('express'); // express
const multer = require('multer');
const cors = require('cors'); // cors
const router = require('./app/routers/api'); // router
const logger = require('./app/helpers/logger');

const app = express();
const PORT = process.env.PORT || 3000;

// On autorise les requêtes Cross-Origin
app.use(cors({
  origin: '*', // on autorise tout le monde
}));

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
