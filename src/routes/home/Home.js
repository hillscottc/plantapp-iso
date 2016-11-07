
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import s from './Home.css';
import PlantsView from '../../components/plants/plants-view'

function Home() {
  return (
    <Layout>
      <div className={s.root}>
        <div className={s.container}>
          {/*<h1 className={s.title}></h1>*/}
          <PlantsView />
        </div>
      </div>
    </Layout>
  );
}


export default withStyles(s)(Home);
