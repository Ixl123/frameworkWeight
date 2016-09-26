import { createStore, compose } from 'redux';

// import the root reducer

import rootReducer from './reducers/rootReducer.js';

// import data
import libraries from './data/libraries';
import progress from './data/progress';


// create an object for the default data
const defaultState = {
  libraries,
  progress
};


const store = createStore(rootReducer, defaultState);

export default store;