
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import PlantsEdit from '../../components/plants/plants-edit';
import s from './PlantAdmin.css';

function PlantAdmin({id=22}) {
  return (
    <Layout>
      <div className={s.root}>
        <div className={s.container}>
          {/*<h1 className={s.title}></h1>*/}

          <h2>id: {id}</h2>

          <PlantsEdit />
        </div>
      </div>
    </Layout>
  );
}


export default withStyles(s)(PlantAdmin);
