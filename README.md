# Routes Documentation

## Routes

### GET - Queries in db/queries/read.js file

X GET /airplane - Get all airports
X GET /airplane/:id - Get airports by id

X GET /flights - Get all flights

- GET /flight/:id - Get flight by id
  X GET /models - Get all models
- GET /model/:id - Get model by id
  X GET /planes - Get all planes
- GET /plane/:id - Get plane by id

### DELETE - Queries in db/queries/remove.js file

X DELETE /flight/:flightcod - Delete airport by id

- DELETE /plane/:planecod - Delete plane by id

### POST - Queries in db/queries/create.js file

X POST /flight - Create flight

- POST /plane - Create plane

### PUT - Queries in db/queries/update.js file

X PUT /flight/:id - Update flight by id

- PUT /plane/:id - Update plane by id
