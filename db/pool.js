const Pool = require('pg').Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password:'123',
  database: "airplanes",
  port: 5432
})       

module.exports = () => pool;