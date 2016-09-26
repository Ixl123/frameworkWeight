import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators.js';
import Main from './Main';


function mapStateToProps(state) {
  return {
    libraries: state.libraries,
    progress: state.progress

  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators(actionCreators, dispatch);
}


const AppFrameworkWeight = connect(mapStateToProps, mapDispatchToProps)(Main);

export default AppFrameworkWeight;