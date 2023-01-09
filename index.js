require('dotenv').config(); // variables d'environnement
const express = require('express'); // express
const router = require('./app/router'); // router
const cors = require('cors'); // cors

const app = express();
const PORT = process.env.PORT || 3000;

// On autorise les requêtes Cross-Origin
app.use(cors({
  origin: '*', // on autorise tout le monde
}));


// Body parsing middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Public
app.use(express.static('./dist'));

// Routage
app.use(router);

// 404
app.use((req,res)=>{
  res.status(404).send('Not found');
});

app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`)
});
