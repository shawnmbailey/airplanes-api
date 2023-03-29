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
app.get('/flights', read.flights);
// GET /flight/:id  -  Get flight by id
app.get('/flight/:airportcod', read.flight);
// GET /models  -  Get all models
app.get('/models', read.models);
// GET /model/:id  -  Get model by id
// GET /planes  -  Get all planes
app.get('/planes', read.planes);
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
app.put('/flight/:id', update.flight);

// TODO: Implement update plane by id -- For students to do
// PUT /plane/:id  -  Update plane by id

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
