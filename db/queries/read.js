const pool = require('../pool')

// Get all airports
const airports = (req, res) => {
  pool().query('SELECT * FROM airport', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

// Get airport by id
const airport = (req, res) => {
  pool().query('SELECT * FROM airport WHERE airportcod = $1', [parseInt(req.params.airportcod)], (error, results) => {
    if (error) {
      res.status(500)
      throw error
    }
    res.status(200).json(results.rows)
  })
}

// Get all flights
// Get flight by id
// Get all models
// Get model by id
// Get all planes
// Get plane by id
 
module.exports = {
  airports,
  airport
}
