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

// Select loading time seconds

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

// handle search input which gets triggers on every keystroke.

export function handleSearchInput(searchedArray) {

  return {
    type: types.HANDLE_SEARCH_INPUT,
    searchedArray
  }
}

// handle search request which gets only triggered if autocomplete field gets selected

export function handleSearchRequest(searchedArray) {
  return {
    type: types.HANDLE_SEARCH_REQUEST,
    searchedArray
  }


}