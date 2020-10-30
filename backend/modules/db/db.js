// Requirements
const config = require('../../../config.js');
const pg = require('pg');

// Disable timezone conversion for the postgres client
pg.types.setTypeParser(1114, str => str);



const pool = new pg.Pool(config.db.postgres);

