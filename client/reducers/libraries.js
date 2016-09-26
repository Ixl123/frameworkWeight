/**
 * config reducer
 */
import * as types from '../actions/ActionTypes';

function libraries(state = [], action) {
  switch (action.type) {
    case types.SELECT_BANDWIDTH_TYP:
      return state
    default:
      return state;
  }
}

export default libraries;