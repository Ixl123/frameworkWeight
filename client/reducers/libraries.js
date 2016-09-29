/**
 * config reducer
 */
import * as types from '../actions/ActionTypes';

function updateLibrary(state = [], action) {
  console.log(state);
}

function libraries(state = [], action) {
  switch (action.type) {
    case types.REQUEST_LIBRARY:
      return {
        ...state,
        isFetching: true
      }
    case types.REQUEST_CDNJS_API:
      return {
        ...state,
        isFetching: true
      }
    case types.RECEIVE_LIBRARY:
      if (action.frameworkType === 'JS') {
        return {
          ...state,
          JavaScriptLibraries: [
            ...state.JavaScriptLibraries.slice(0, action.index),
            Object.assign({}, state.JavaScriptLibraries[action.index], {
              lastUpdated: action.lastUpdated,
              isFetching: action.isFetching,
              size_compressed: action.size_compressed
            }),
            ...state.JavaScriptLibraries.slice(action.index + 1)
          ]
        }
      } else {
        return {
          ...state,
          CSSLibraries: [
            ...state.CSSLibraries.slice(0, action.index),
            Object.assign({}, state.CSSLibraries[action.index], {
              lastUpdated: action.lastUpdated,
              isFetching: action.isFetching,
              size_compressed: action.size_compressed
            }),
            ...state.CSSLibraries.slice(action.index + 1)
          ]
        }
      }
    case types.RECEIVE_CDNJS_API:
      if (action.frameworkType === 'JS') {
        return {
          ...state,
          JavaScriptLibraries: [
            ...state.JavaScriptLibraries.slice(0, action.index),
            Object.assign({}, state.JavaScriptLibraries[action.index], {
              version: action.version,
              isFetching: action.isFetching,
              description: action.description,
              lastUpdated: action.lastUpdated
            }),
            ...state.JavaScriptLibraries.slice(action.index + 1)
          ]
        }
      } else {
        return {
          ...state,
          CSSLibraries: [
            ...state.CSSLibraries.slice(0, action.index),
            Object.assign({}, state.CSSLibraries[action.index], {
              version: action.version,
              isFetching: action.isFetching,
              description: action.description,
              lastUpdated: action.lastUpdated
            }),
            ...state.CSSLibraries.slice(action.index + 1)
          ]
        }
      }
    default:
      return state;
  }
}

export default libraries;