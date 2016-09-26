import React from 'react';
import { bindActionCreators } from 'redux';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators.js';


const styles = {
  customWidth: {
    width: 200,
  },
};

class CalculatorDropDownConnectionType extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = (event, index, value) => this.setState({
    value
  });

  render() {
    return (
      <div>
        <DropDownMenu
                      value={ this.props.progress.selectedbandwidthType }
                      onChange={ this.handleChange }>
          { this.props.progress.bandwidthTypes.map((bandwidthType, i) => <MenuItem
                                                                                   value={ i }
                                                                                   primaryText={ bandwidthType } />) }
        </DropDownMenu>
        <br />
      </div>
      );
  }
}
function mapStateToProps(state) {
  return {
    libraries: state.libraries,
    progress: state.progress

  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators(actionCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CalculatorDropDownConnectionType);

