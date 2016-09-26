import React from 'react';
import Slider from 'material-ui/Slider';
import SvgIcon from 'material-ui/SvgIcon';
import ActionAlarm from 'material-ui/svg-icons/action/alarm';
const {Grid, Row, Col} = require('react-flexbox-grid');

const iconStyles = {
  marginRight: 24,
  marginTop: 18,
};



const CalculatorSliderLoadingTime = React.createClass({
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col
                 xs={ 1 }
                 md={ 1 }>
            <ActionAlarm style={ iconStyles } />
            </Col>
            <Col
                 xs={ 10 }
                 md={ 10 }>
            <Slider
                    name="LoadingTime"
                    defaultValue={ 2 }
                    step={ 0.1 }
                    max={ 10 }
                    min={ 0.1 } />
            <p>
              <span>{ 'The value of this slider is: ' }</span>
              <span>{ ' from a range of 0.1 to 10 inclusive' }</span>
            </p>
            </Col>
            <Col
                 xs={ 1 }
                 md={ 1 }> 10 seconds
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
});

export default CalculatorSliderLoadingTime;