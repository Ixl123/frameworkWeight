import { createStore, compose, applyMiddleware } from 'redux';
import { fetchLibrary } from './actions/actionCreators';
import React from 'react';

// import the root reducer

import rootReducer from './reducers/rootReducer';
// import data
let libraries = require('json!./data/editedcdnjsLibraries.json');
import progress from './data/progress';
import filteredLibraries from './data/filteredLibraries';

// import thunkMiddleware for async actions

import thunkMiddleware from 'redux-thunk'

import createLogger from 'redux-logger'
import { loadState, saveState } from './localStorage';
// accessibility 
// var a11y = require('react-a11y');

// import throttle to only run save state function only once a second
import throttle from 'lodash/throttle';

const loggerMiddleware = createLogger()

// create an object for the default data
const defaultState = {
  libraries,
  progress,
  filteredLibraries
};

let middleware = [thunkMiddleware];
// check for  build or dev version. include loggermiddlerware only in dev 
if (process.env.NODE_ENV !== 'production') {
  // a11y(React);
  middleware = [...middleware, loggerMiddleware];
} else {
  middleware = [...middleware];
}
const enhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const persistedState = loadState();

const store = createStore(rootReducer,
  persistedState === undefined && process.env.NODE_ENV !== 'production' ? defaultState : persistedState,
  enhancers);
// only write to localstorage once a second 
store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

if (module.hot) {
  module.hot.accept('./reducers/rootReducer', () => {
    const nextRootReducer = require('./reducers/rootReducer').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;