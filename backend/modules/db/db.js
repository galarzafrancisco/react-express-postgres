// Requirements
const config = require('../../../config.js');
const pg = require('pg');

// Disable timezone conversion for the postgres client
pg.types.setTypeParser(1114, str => str);

// Connect to the Database
const pool = new pg.Pool(config.db.postgres);

module.exports = pool;