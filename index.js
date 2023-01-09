require('dotenv').config(); // variables d'environnement
const express = require('express'); // express
const router = require('./app/router'); // router

const app = express();
const PORT = process.env.PORT || 3000;

// Public
app.use(express.static('./public'));

// Body parsing middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routage
app.use(router);

// 404
app.use((req,res)=>{
  res.status(404).send('Not found');
});

app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`)
});
