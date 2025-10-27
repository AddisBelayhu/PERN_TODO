const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "Mammoa19&",
    host: "localhost",
    port: 4532,
    database: "perntodo"
})

module.exports = pool