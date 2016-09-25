import React from 'react';
import { Link } from 'react-router';
import CalculatorDropDownConnectionType from './CalculatorDropDownConnectionType.js';
import CalculatorSliderLoadingTime from './CalculatorSliderLoadingTime.js'
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
const Calculator = React.createClass({

  render() {
    return (
      <div className="calculator">
        <CalculatorDropDownConnectionType></CalculatorDropDownConnectionType>
        <CalculatorSliderLoadingTime></CalculatorSliderLoadingTime>
        <Divider />
      </div>
    )
  }
});

export default Calculator;