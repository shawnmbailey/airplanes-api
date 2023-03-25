const express = require('express');
const { create, read, update, remove }  = require('./db/index.js');

const port = 3001;
const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

// My Tables
/*
  airport
  flight
  model
  plane
*/

// My Routes

// GET /airports  -  Get all airports
app.get('/airports', create.airports);

// GET /airport/:id  -  Get airport by id
app.get('/airport/:id', create.airport);

// GET /flights  -  Get all flights
// GET /flight/:id  -  Get flight by id
// GET /models  -  Get all models
// GET /model/:id  -  Get model by id
// GET /planes  -  Get all planes
// GET /plane/:id  -  Get plane by id

/* DELETE
  /airport/:i
  /flight/:id
  /model/:id
  /plane/:id
*/

/* POST
  /airport
  /flight
  /model
  /plane
*/

/* PUT
  /airport/:id
  /flight/:id
  /model/:id
  /plane/:id
*/







app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});