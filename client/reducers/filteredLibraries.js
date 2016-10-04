/**
 * filtered libraries reducer
 */
import * as types from '../actions/ActionTypes';

function filteredLibraries(state = [], action) {
  switch (action.type) {
    case types.HANDLE_SEARCH_INPUT:
      return {
        ...state,
        searchedLibraries: action.searchedArray
      }
    case types.HANDLE_SEARCH_REQUEST:
      console.log(action.searchedArray);
      debugger;
      return {
        ...state,
        searchedLibraries: action.searchedArray,
      }
    default:
      return state;
  }
}

export default filteredLibraries;