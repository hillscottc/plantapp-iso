
import Sequelize from 'sequelize';
import { sqlLiteUrl } from '../config';

const sequelize = new Sequelize(sqlLiteUrl, {
  define: {
    freezeTableName: true,
  },
});

export default sequelize;
