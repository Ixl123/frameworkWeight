/**
 *
 * ACTIONS ARE JUST OBJECT SO THEY NEED TO HAVE A RETURN TYPE (THE NAME OF THE ACTION)
 * In every action send as little information as possible
 * Actions descsribe the fact that something 
 * is happened just like an ui interaction or loading new data
 * but don't specify how the application state is changing
 * in redux all aplication state is stored in a single object
 */

import * as types from './ActionTypes.js';
import fetch from 'isomorphic-fetch'
import 'babel-polyfill'
let gzip = require('gzip-js')


// Select bandwidth

export function selectBandwidth(event, index, selectedbandwidthType,) {
  return {
    type: types.SELECT_BANDWIDTH_TYP,
    selectedbandwidthType
  }
}

// Select bandwidth

export function selectLoadSeconds(event, loadingTime) {
  return {
    type: types.SELECT_LOAD_SECONDS,
    loadingTime
  }
}

//calculates the loading time provide seconds and bandwidth_typ_speed and latency in ms

export function calculateBudget(loadingTime, selectedbandwidthType, latency) {
  let budget = Math.round(((loadingTime + (latency / 1000)) * selectedbandwidthType) / 8);
  return {
    type: types.CALCULATE_BUDGET,
    budget
  }
}

/**
 * ASYNC ACTIONS
 * @param  {[type]} libraryURL [description]
 * @return {[type]}           [description]
 */

export function requestLibrary(libraryURL) {
  return {
    type: types.REQUEST_LIBRARY,
    libraryURL
  }
}
/**
 * ASYNC ACTIONS
 * @param  {[type]} libraryURL [description]
 * @return {[type]}           [description]
 */

export function requestcdnAPI(apiRequestName) {
  return {
    type: types.REQUEST_CDNJS_API,
    apiRequestName
  }
}

export function receivecdnAPI(json, index, frameworkType) {
  return {
    frameworkType: frameworkType,
    type: types.RECEIVE_CDNJS_API,
    index,
    version: json.version,
    description: json.description,
    lastUpdated: Date.now(),
    isFetching: false
  }
}

export function receiveLibrary(libraryURL, librarySize, index, frameworkType) {

  return {
    frameworkType: frameworkType,
    type: types.RECEIVE_LIBRARY,
    size_compressed: librarySize,
    index,
    lastUpdated: Date.now(),
    isFetching: false

  }
}
// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchLibrary('reactjs'))

export function fetchLibrary(libraryURL, i, frameworkType) {

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function(dispatch) {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestLibrary(libraryURL))

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
    return fetch(libraryURL)
      .then(response => response.text())
      .then(plainText =>
      // We can dispatch many times!
      // Here, we update the app state with the results of the API call.

      dispatch(receiveLibrary(libraryURL, calculateKBSize(gZip(plainText)), i, frameworkType))
    )

  // In a real world app, you also want to
  // catch any error in the network call.
  }
}

function gZip(arrayBuffer) {
  let options = {
    level: 6,
    name: 'libraryLength',
    timestamp: parseInt(Date.now() / 1000, 10)
  };
  let out = gzip.zip(arrayBuffer, options);
  return out.length;
}
/**
 * convert byteLength to bit
 * @param  {[type]} byteLength [description]
 * @return {[type]}            [description]
 */
function calculateKBSize(byteLength) {
  return Math.round(byteLength / 1000);
}


export function fetchcdnjAPI(libraryName, i, frameworkType) {

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
  return function(dispatch) {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestcdnAPI(libraryName))

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
    return fetch('https://api.cdnjs.com/libraries?search=' + libraryName + '&fields=version,description,assets')
      .then(response => response.json())
      .then(json =>
      // We can dispatch many times!
      // Here, we update the app state with the results of the API call.
      // json[0] most valuable search hit and latest is the url
      dispatch(fetchLibrary(json.results[0].latest, i, frameworkType)).then(() => dispatch(receivecdnAPI(json.results[0], i, frameworkType)))


      // frameworkType === 'CSS' ? dispatch(fetchLibrary(json[0].assets[].in)) : true,

    )

  // In a real world app, you also want to
  // catch any error in the network call.
  }
}