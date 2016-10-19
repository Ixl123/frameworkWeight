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
    case types.OPEN_LIBRARY_DIALOG:
      return {
        ...state,
        libraryDialogOpened: action.libraryDialogOpened,
        libraryDialogData: action.libraryDialogData
      }
    case types.CLOSE_LIBRARY_DIALOG:
      return {
        ...state,
        libraryDialogOpened: action.libraryDialogOpened
      }

    default:
      return state;
  }
}

export default progress;