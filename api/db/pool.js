const Pool = require('pg').Pool;

const pool = new Pool({
  user: "postgres",
  host: "airplanes-api.ctahicdcrrom.us-east-1.rds.amazonaws.com",
  password:'Bailey154479!',
  database: "airplanes",
  port: 5432
})       

module.exports = () => pool;