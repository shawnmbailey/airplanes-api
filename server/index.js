const express = require('express');
const { create, read, update, remove }  = require('./db/index.js');

const port = 3001;
const app = express();
app.use(express.json());


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
app.get('/airports', read.airports);

// GET /airport/:id  -  Get airport by id
app.get('/airport/:airportcod', read.airport);


// TODO: Implement the rest of the Create Routes -- For students to do
// GET /flights  -  Get all flights
// GET /flight/:id  -  Get flight by id
// GET /models  -  Get all models
// GET /model/:id  -  Get model by id
// GET /planes  -  Get all planes
// GET /plane/:id  -  Get plane by id


// DELETE /flight/:flightcod  -  Delete airport by id
app.delete('/flight/:flightcod', remove.flight);

// TODO: Implement delete plane by id -- For students to do
// DELETE /plane/:planecod  -  Delete plane by id

// POST /flight  -  Create flight
app.post('/flight', create.flight);

// TODO: Implement create plane -- For students to do
// POST /plane  -  Create plane

// TODO: Implement update flight by id -- For Demonstration
// PUT /flight/:id  -  Update flight by id

// TODO: Implement update plane by id -- For students to do
// PUT /plane/:id  -  Update plane by id

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
