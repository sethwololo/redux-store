import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Catalog from './components/Catalog';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Catalog />
      </Provider>
    </React.StrictMode>
  );
};

export default App;
