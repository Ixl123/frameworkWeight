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
/**
 * [selectBandwidth description]
 * @param  {[type]} event                 [description]
 * @param  {[type]} index                 [description]
 * @param  {[type]} selectedbandwidthType [description]
 * @param  {[type]}                       [description]
 * @return {[type]}                       [description]
 */
export function selectBandwidth(event, index, selectedbandwidthType,) {
  return {
    type: types.SELECT_BANDWIDTH_TYP,
    selectedbandwidthType
  }
}

// Select loading time seconds
/**
 * [selectLoadSeconds description]
 * @param  {[type]} event       [description]
 * @param  {[type]} loadingTime [description]
 * @return {[type]}             [description]
 */
export function selectLoadSeconds(event, loadingTime) {
  return {
    type: types.SELECT_LOAD_SECONDS,
    loadingTime
  }
}

//calculates the loading time provide seconds and bandwidth_typ_speed and latency in ms
/**
 * [calculateBudget description]
 * @param  {[type]} loadingTime           [description]
 * @param  {[type]} selectedbandwidthType [description]
 * @param  {[type]} latency               [description]
 * @return {[type]}                       [description]
 */
export function calculateBudget(loadingTime, selectedbandwidthType, latency) {
  let budget = Math.round(((loadingTime + (latency / 1000)) * selectedbandwidthType) / 8);
  return {
    type: types.CALCULATE_BUDGET,
    budget
  }
}

//handle search input which gets triggers on every keystroke.
/**
 * handle search input which gets triggers on every keystroke
 * @param  {Array} searchedArray an array with all the elements which contained the searched string
 * @return {[type]}               [description]
 */
export function handleSearchInput(searchedArray) {

  return {
    type: types.HANDLE_SEARCH_INPUT,
    searchedArray
  }
}

// handle search request which gets only triggered if autocomplete field gets selected
/**
 * [handleSearchRequest description]
 * @param  {[type]} searchedArray [description]
 * @return {[type]}               [description]
 */
export function handleSearchRequest(searchedArray) {
  return {
    type: types.HANDLE_SEARCH_REQUEST,
    searchedArray
  }
}
/**
 * [proceedToNextStep description]
 * @param  {[type]} step [description]
 * @return {[type]}      [description]
 */
export function proceedToNextStep(step) {

  return {
    type: types.PROCEED_TO_NEXT_STEP,
    step
  }
}
/**
 * [proceedToPreviousStep description]
 * @param  {[type]} step [description]
 * @return {[type]}      [description]
 */
export function proceedToPreviousStep(step) {
  return {
    type: types.PROCEED_TO_PREVIOUS_STEP,
    step
  }
}
/**
 * [openLibraryDialog description]
 * @param  {[type]} openedLibrary         [description]
 * @param  {[type]} libraryDialogOpened [description]
 * @return {[type]}                       [description]
 */
export function openLibraryDialog(libraryDialogOpened, libraryDialogData) {
  return {
    type: types.OPEN_LIBRARY_DIALOG,
    libraryDialogOpened,
    libraryDialogData
  }
}
/**
 * [closeLibraryDialog description]
 * @param  {[type]} libraryDialogOpened [description]
 * @return {[type]}                       [description]
 */
export function closeLibraryDialog(libraryDialogOpened) {
  return {
    type: types.CLOSE_LIBRARY_DIALOG,
    libraryDialogOpened
  }
}