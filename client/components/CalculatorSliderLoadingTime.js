import React from 'react';
import Slider from 'material-ui/Slider';
const CalculatorSliderLoadingTime = React.createClass({
  render() {
    return (
      <div>
        <Slider
                name="LoadingTime"
                defaultValue={ 2 }
                description="Webapp should load in ... Seconds"
                step={ 0.1 }
                max={ 10 }
                min={ 0.1 } />
        <p>
          <span>{ 'The value of this slider is: ' }</span>
          <span>{ ' from a range of 0.1 to 10 inclusive' }</span>
        </p>
      </div>
    )
  }
});

export default CalculatorSliderLoadingTime;