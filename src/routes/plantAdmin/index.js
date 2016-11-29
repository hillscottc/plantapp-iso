
import React from 'react';
import PlantAdmin from './PlantAdmin'
// import fetch from '../../core/fetch';

export default {

  path: '/plantAdmin/:id',


  // I considered pre-loading plants here. But adds complexity.

  // async action() {
  //   const resp = await fetch("/api/plants/");
  //   const json = await resp.json();
  //   const { data, pagination } = json;
  //   if (!data || !data) throw new Error('Failed to load data.');
  //   // console.log("GOT data length:", data.length);
  //   // console.log("GOT pagination:", pagination);
  //   return {
  //     title: 'Plants App',
  //     component: <Home plants={data}/>,
  //   };
  // },

  async action(ctx, {id}) {

    return {
      title: 'Plant Admin',
      component: <PlantAdmin {...{id}}/>,
    };
  },

};
