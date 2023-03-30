const Pool = require('../pool');

// Update flight by id // /flight/:id
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


// Update plane by id // /plane/:id
const plane = (req, res) => { 
  const { planecod, name, modelcod } = req.body;
  Pool().query( 'UPDATE PLANE SET planecod = $1, name = $2, modelcod = $3 WHERE planecod = $4', [planecod, name, modelcod, req.params.id], (error, results) => {
    if (error) {
      res.status(500).send(error.detail)
    } 
    res.status(201).send(`Plane updated with planecod: ${planecod}`)
  })
};


module.exports = {
  flight,
  plane
};



