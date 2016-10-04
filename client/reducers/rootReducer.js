import { combineReducers } from 'redux';

// import reducers

import progress from './progress';
import libraries from './libraries';
import filteredLibraries from './filteredLibraries';

const rootReducer = combineReducers({
  progress,
  libraries,
  filteredLibraries
});

export default rootReducer;