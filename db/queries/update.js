const Pool = require('../pool');


const flight = (req, res) => {
  const { flightcod, toairportcod, company, duration, planecod } = req.body;
  console.log(req.params.id,flightcod)
  Pool().query( 'UPDATE FLIGHT SET flightcod = $1, toairportcod = $2, company = $3, duration = $4, planecod = $5 WHERE flightcod = $6', [flightcod, toairportcod, company, duration, planecod, req.params.id], (error, results) => {
    if (error) {
      res.status(500).send(error.detail)
    }else {
        res.status(201).send(`Flight updated with flightcod: ${flightcod}`)
    }
  })
};

module.exports = {
  flight
};



