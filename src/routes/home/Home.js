
import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import s from './Home.css';
import PlantsView from '../../components/plants/plants-view'

function Home() {
  return (
    <Layout>
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.title}></h1>
          <PlantsView />
        </div>
      </div>
    </Layout>
  );
}

// Home.propTypes = {
//   plants_gql: PropTypes.arrayOf(PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     link: PropTypes.string.isRequired,
//     contentSnippet: PropTypes.string,
//   })).isRequired,
// };

Home.propTypes = {
  // plants_gql: PropTypes.array.isRequired,
};


export default withStyles(s)(Home);
