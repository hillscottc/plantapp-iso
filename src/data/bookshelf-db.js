const config = require('../config');

const knex = require('knex')({client: 'pg', connection: config.pgUrl });

module.exports = require('bookshelf')(knex);
