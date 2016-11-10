import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators.js';
import Main from './Main';

/**
 * connect the redux state with the react props
 * @param  {Object} state initial state 
 * @return {Object}  props object with maped state values
 */
function mapStateToProps(state) {
  return {
    libraries: state.libraries,
    progress: state.progress,
    filteredLibraries: state.filteredLibraries
  }
}

/**
 * connect redux action to react props
 * @param  {Object} dispatch 
 * @return {Object} all actions which we have defined mapped to react props
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}


const AppFrameworkWeight = connect(mapStateToProps, mapDispatchToProps)(Main);

export default AppFrameworkWeight;