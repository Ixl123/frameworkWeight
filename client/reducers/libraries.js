/**
 * libraries reducer
 */
import * as types from '../actions/ActionTypes';

function libraries(state = [], action) {
  switch (action.type) {
    case types.HANDLE_SEARCH_REQUEST:
      return librarie(state, action)
    case types.HANDLE_SEARCH_INPUT:
      return librarie(state, action)
    case types.TOGGLE_LIBRARY:
      return librarie(state, action)
    default:
      return state;
  }
}
function librarie(state = [], action) {
  switch (action.type) {
    case types.TOGGLE_LIBRARY:
      return state.map((librarie, index) => {
        if (index === action.index) {
          return {
            ...librarie,
            included: librarie.included === undefined ? true : !librarie.included
          }
        } else {
          return {
            ...librarie,
            included: librarie.included === true ? true : false
          }
        }
      })
    case types.HANDLE_SEARCH_REQUEST:
      return state.map((librarie, index) => {
        if (index === action.index) {
          return {
            ...librarie,
            searched: true
          }
        } else {
          return {
            ...librarie,
            searched: false
          }
        }
      })
    case types.HANDLE_SEARCH_INPUT:
      return state.map((librarie, index) => {
        if (action.indicesArray.find((value, i) => value === index) !== undefined) {
          return {
            ...librarie,
            searched: true
          }
        } else {
          return {
            ...librarie,
            searched: false
          }
        }
      })
    default:
      return state
  }
}
export default libraries;