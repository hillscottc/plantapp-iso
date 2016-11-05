import Bookshelf from '../bookshelf-db';


// I probably dont need fir gql queries
Bookshelf.plugin('pagination');


class Plant extends Bookshelf.Model {
  get tableName() { return 'plantapp.plant'; }
}


/**
 * Sets a knex query builder object for given search params.
 * @param qb a knex query builder
 * @param queryArgs for plants
 */
Plant.setPlantsQuery = (qb, queryArgs) => {
  let {family, common, symbol, sci} = queryArgs;

  family = family ? "%" + family + "%" : "";
  common = common ? "%" + common + "%" : "";
  sci = sci ? "%" + sci + "%" : "";
  symbol = symbol ? "%" + symbol.toUpperCase() + "%" : "";

  if (symbol) qb.where('symbol', 'like', symbol);
  if (common) qb.where('common_name', 'like', common);
  if (family) qb.where('family', 'like', family);
  if (sci) qb.where('sci_name', 'like', sci);
};


export default Plant;


