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
        stepp: state.stepp === 2 ? 2 : 1,
        sliderDisabled: false
      }
    case types.SELECT_LOAD_SECONDS:

      return {
        ...state,
        loadingTime: action.loadingTime,
        stepp: 2,
        seeResults: true
      }
    case types.CALCULATE_BUDGET:
      return {
        ...state,
        budget: action.budget
      }
    default:
      return state;
  }
}

export default progress;