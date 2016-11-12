import * as actions from './actionCreators'
import * as types from './ActionTypes'

describe('actions', () => {
  it('should select a bandwidth from an array index', () => {
    const index = 1
    const expectedAction = {
      type: types.SELECT_BANDWIDTH_TYP,
      selectedbandwidthType: 1
    }
    expect(actions.selectBandwidth(index)).toEqual(expectedAction);
  })
  it('should select a loading time from 0.1 to 10', () => {

    const loadingtTimeUnderLimit = 0.01
    const loadingtTimeInLimit = 5.0
    const loadingtTimeAboveLimit = 11.0
    const expectedActionUnderLimit = {
      type: types.SELECT_LOAD_SECONDS,
      loadingTime: 0.1
    }
    const expectedActionInLimit = {
      type: types.SELECT_LOAD_SECONDS,
      loadingTime: loadingtTimeInLimit
    }
    const expectedActionAboveLimit = {
      type: types.SELECT_LOAD_SECONDS,
      loadingTime: 0.1
    }
    expect(actions.selectLoadSeconds(loadingtTimeUnderLimit)).toEqual(expectedActionUnderLimit);
    expect(actions.selectLoadSeconds(loadingtTimeInLimit)).toEqual(expectedActionInLimit);
    expect(actions.selectLoadSeconds(loadingtTimeAboveLimit)).toEqual(expectedActionAboveLimit);

  })
})