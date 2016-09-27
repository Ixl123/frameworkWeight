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