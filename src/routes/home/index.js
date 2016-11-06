
import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';

export default {

  path: '/',

  async action() {
    const resp = await fetch("/api/plants/");
    const { data } = await resp.json();
    // const plants = await resp.json();
    // if (!data || !data.plants) throw new Error('Failed to load plants.');

    console.log("GOT plants:", data);

    return {
      title: 'Plants App',
      component: <Home plants={data}/>,
    };
  },

  // async action() {
  //   return {
  //     title: 'Plant App',
  //     component: <Home />,
  //   };
  // },

};
