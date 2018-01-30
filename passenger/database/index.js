const knex = require('knex') ({
    client: 'pg',

    connection: {
      host: '127.0.0.1', 
      user: 'macbookair', 
      password: '', 
      database: 'CARN', 
    },
    
    pool: { min: 0, max: 7 }
  });

module.exports = {
  pg: knex
}