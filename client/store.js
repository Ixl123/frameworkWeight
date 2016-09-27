import { createStore, compose } from 'redux';

// import the root reducer

import rootReducer from './reducers/rootReducer';

// import data
import libraries from './data/libraries';
import progress from './data/progress';


// create an object for the default data
const defaultState = {
  libraries,
  progress
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()

)

const store = createStore(rootReducer, defaultState, enhancers);

if (module.hot) {
  module.hot.accept('./reducers/rootReducer', () => {
    const nextRootReducer = require('./reducers/rootReducer').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;