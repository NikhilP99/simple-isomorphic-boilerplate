import React from 'react';
import AppLayout from 'components/AppLayout';
import Home from './Home';

async function action() {
  return {
    title: 'React Starter Kit',
    chunks: ['Home'],
    component: (
      <AppLayout>
        <Home />
      </AppLayout>
    ),
  };
}

export default action;
