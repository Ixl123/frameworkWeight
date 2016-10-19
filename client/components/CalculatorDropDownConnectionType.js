import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

const styles = {
  customWidth: {
    width: 200,
  },
};

/**
 * Dropdown selection for the Connection type
 */
class CalculatorDropDownConnectionType extends React.Component {

  /**
   * handles selection change of the dropdown component
   * @param  {Object} event the actual event.
   * @param  {Number} index the selected index 
   * @param  {String} value the selected string value
   */
  handleChange = (event, index, value) => {
    if (this.props.progress.selectedbandwidthType >= 0 && this.props.progress.loadingTime >= 0) {
      this.props.calculateBudget(this.props.progress.bandwidthTypes[value].speed, this.props.progress.loadingTime, this.props.progress.bandwidthTypes[value].latency)
    }
    this.props.selectBandwidth(event, index, value)
  };
  render() {
    const progress = this.props.progress;
    return (
      <div>
        <h2>1. Select BandwidthType</h2>
        <Divider/>
        <SelectField
                     value={ progress.selectedbandwidthType }
                     onChange={ this.handleChange }
                     floatingLabelText="Bandwidth type"
                     errorText={ progress.selectedbandwidthType < 0 && 'Please select a bandwidth type' }>
          { progress.bandwidthTypes.map((bandwidthType, i) => <MenuItem
                                                                        key={ i }
                                                                        value={ i }
                                                                        primaryText={ bandwidthType.name } />) }
        </SelectField>
      </div>
      );
  }
}
export default CalculatorDropDownConnectionType;

