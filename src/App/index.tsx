import React from 'react';
import { Provider } from 'react-redux';

import { Layout } from '@components/Layout';
import { store } from '@redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};
