import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import GlobalStyles from './GlobalStyles';
import store from './store';

render(
  <Provider store={store}>
    <BrowserRouter>
    <GlobalStyles/>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
