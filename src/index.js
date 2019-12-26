import React from 'react';
import ReactDOM from 'react-dom';

import Application from './components/Application';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

import './index.scss';

const store = createStore(
  rootReducer,
  typeof window === 'object' &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f,
);

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root'),
);
