// const config = require('../config');
//
// const knex = require('knex')({client: 'pg', connection: config.databaseUrl });
//
// module.exports = require('bookshelf')(knex);


import knex from 'knex';
import bookshelf from 'bookshelf';

// Can't use config values here.
// import config  from '../config';


const Bookshelf = bookshelf(knex(
  {client: 'pg', connection: 'postgres:///hills120' }
));

export default Bookshelf;
