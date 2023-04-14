const Pool = require('../pool');

// Delete airport by id
const flight = (req, res) => {
Pool().query('DELETE FROM flight WHERE flightcod = $1', [parseInt(req.params.flightcod)], (error, results) => {
    if (error) {
      res.status(500)
      throw error
    }
    res.status(200).send(`Flight deleted with flightcod: ${req.params.flightcod}`)
  })
}
const plane = (req, res) => {
    Pool().query('DELETE FROM plane WHERE planecod = $1', [parseInt(req.params.id)], (error, results) => {
        if (error) {
          res.status(500)
          throw error
        }
        res.status(200).send(`Flight deleted with flightcod: ${req.params.id}`)
      })
    }
    
module.exports = {
  flight,
  plane
}
