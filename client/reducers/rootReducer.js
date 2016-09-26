import { combineReducers } from 'redux';

// import reducers

import progress from './progress';
import libraries from './libraries';

const rootReducer = combineReducers({
  progress,
  libraries
});

export default rootReducer;