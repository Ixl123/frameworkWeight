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

/**
 * selects the bandtwidth
 * @param  {Integer} selectedbandwidthType  the index of the bandwidth array value ranges from 0-8 zero for no selection
 * @return {Action Object} with the action type SELECT_BANDWIDTH_TYP and the integer index
 */
export const selectBandwidth = (selectedbandwidthType) => ( {
  type: types.SELECT_BANDWIDTH_TYP,
  selectedbandwidthType
});

/**
 * Select loading time in seconds
 * @param  {Float} loadingTime in seconds from min value 0.1 to 10
 * @return {Action Object} with the Action of type SELECT_LOAD_SECONDS and loadingtime in seconds
 */
export const selectLoadSeconds = (loadingTime) => ({
  type: types.SELECT_LOAD_SECONDS,
  loadingTime
});

/**
 * calculates the loading time provide seconds and bandwidth_typ_speed and latency in ms
 * @param  {Integer} bandwidthSpeed in milliseconds        
 * @param  {Float} loadingTime in seconds from min value 0.1 to 10 
 * @param  {Integer} latency of the selected bandtwidth 
 * @return {Action Object} with the calculated budget value and the action of type CALCULATE_BUDGET
 */
export const calculateBudget = (bandwidthSpeed, loadingTime, latency) => {
  let budget = Math.round(((loadingTime + (latency / 1000)) * bandwidthSpeed) / 8);
  return {
    type: types.CALCULATE_BUDGET,
    budget
  }
}

/**
 * handle search input which gets triggers on every keystroke.
 * @param  {Array} indicesArray an array with all integer values which represent the indices which contained the searched string
 * @return {Action Object} Array object.
 */
export const handleSearchInput = (indicesArray, searchedString) => ({
  type: types.HANDLE_SEARCH_INPUT,
  indicesArray,
  searchedString
});

/**
 * handle search request which gets only triggered if autocomplete field gets selected
 * @param  {[type]} searchedArray [description]
 * @return {[type]}               [description]
 */
export const handleSearchRequest = (index, searchedString) => ({
  type: types.HANDLE_SEARCH_REQUEST,
  index,
  searchedString
});
/**
 * [proceedToNextStep description]
 * @param  {[type]} step [description]
 * @return {[type]}      [description]
 */
export const proceedToNextStep = (step) => ({
  type: types.PROCEED_TO_NEXT_STEP,
  step
});
/**
 * [proceedToPreviousStep description]
 * @param  {[type]} step [description]
 * @return {[type]}      [description]
 */
export const proceedToPreviousStep = (step) => ({
  type: types.PROCEED_TO_PREVIOUS_STEP,
  step
});
/**
 * [openLibraryDialog description]
 * @param  {[type]} openedLibrary         [description]
 * @param  {[type]} libraryDialogOpened [description]
 * @return {[type]}                       [description]
 */
export const openLibraryDialog = (libraryDialogOpened, libraryDialogData) => ({
  type: types.OPEN_LIBRARY_DIALOG,
  libraryDialogOpened,
  libraryDialogData
});
/**
 * [closeLibraryDialog description]
 * @param  {[type]} libraryDialogOpened [description]
 * @return {[type]}                       [description]
 */
export const closeLibraryDialog = (libraryDialogOpened) => ( {
  type: types.CLOSE_LIBRARY_DIALOG,
  libraryDialogOpened
});

/**
 * ads or deletes the budget of the selected framework
 * @param  {[type]} libraryDialogOpened [description]
 * @return {[type]}                     [description]
 */
export const toggleLibrary = (index) => ({
  type: types.TOGGLE_LIBRARY,
  index
});

export const addToActualBudget = (actualBudget) => ({
  type: types.ADD_TO_ACTUAL_BUDGET,
  actualBudget
});
