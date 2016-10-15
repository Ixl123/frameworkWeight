/**
 * progress reducer
 */
import * as types from '../actions/ActionTypes';

function progress(state = [], action) {
  switch (action.type) {
    case types.SELECT_BANDWIDTH_TYP:

      return {
        ...state,
        selectedbandwidthType: action.selectedbandwidthType,
        sliderDisabled: false
      }
    case types.SELECT_LOAD_SECONDS:

      return {
        ...state,
        loadingTime: action.loadingTime,
        seeResults: true
      }
    case types.CALCULATE_BUDGET:
      return {
        ...state,
        budget: action.budget
      }
    case types.PROCEED_TO_NEXT_STEP:
      return {
        ...state,
        step: action.step
      }
    case types.PROCEED_TO_PREVIOUS_STEP:
      return {
        ...state,
        step: action.step
      }
    default:
      return state;
  }
}

export default progress;