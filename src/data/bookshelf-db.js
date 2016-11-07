import knex from 'knex';
import bookshelf from 'bookshelf';

// Can't use config values here.
// import config  from '../config';

const Bookshelf = bookshelf(knex(
  {client: 'pg', connection: 'postgres:///hills120' }
));

export default Bookshelf;