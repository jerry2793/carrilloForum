import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(reduxThunk)),
  // composeEnhancer(applyMiddleware(reduxThunk)),
);

export default store;