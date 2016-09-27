import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


const styles = {
  customWidth: {
    width: 200,
  },
};

class CalculatorDropDownConnectionType extends React.Component {


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
        <br />
      </div>
      );
  }
}
export default CalculatorDropDownConnectionType;

