const Pool = require('../pool');

// Post flight
const flight = (req, res) => {
  const { flightcod, toairportcod, company, duration, planecod } = req.body;
  Pool().query( 'INSERT INTO FLIGHT (flightcod, toairportcod, company, duration, planecod) VALUES ($1, $2, $3, $4, $5)', [flightcod, toairportcod, company, duration, planecod], (error, results) => {
    if (error) {
      res.status(500)
      throw error
    }
    res.status(201).send(`Flight added with flightcod: ${flightcod}`)
  })
};

module.exports = {
  flight
};