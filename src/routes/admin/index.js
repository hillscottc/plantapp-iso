
import React from 'react';

const title = 'Admin Page';
const isAdmin = false;

export default {

  path: '/admin',

  async action() {
    if (!isAdmin) {
      return { redirect: '/login' };
    }

    const Admin = await new Promise((resolve) => {
      require.ensure([], (require) => resolve(require('./Admin').default), 'admin');
    });

    return {
      title,
      chunk: 'admin',
      component: <Admin title={title} />,
    };
  },

};
