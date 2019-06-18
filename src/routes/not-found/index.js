import React from 'react';
import AppLayout from 'components/AppLayout';
import NotFound from './NotFound';

const title = 'Page Not Found';

function action() {
  return {
    chunks: ['not-found'],
    title,
    component: (
      <AppLayout>
        <NotFound title={title} />
      </AppLayout>
    ),
    status: 404,
  };
}

export default action;
