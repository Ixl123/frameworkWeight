import React from 'react';
import Slider from 'material-ui/Slider';
import SvgIcon from 'material-ui/SvgIcon';
import ActionAlarm from 'material-ui/svg-icons/action/alarm';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
const {Grid, Row, Col} = require('react-flexbox-grid');

const iconStyles = {
  marginRight: 24,
  marginTop: 18,
};

class CalculatorSliderLoadingTime extends React.Component {
  /**
   * handle slider change and dispatch action to redux
   * @param  {Object} event      the actual event
   * @param  {Number} loadingTime selected loadingt time in seconds range 0.1-10s
   */
  handleChange = (event, loadingTime) => {

    this.props.selectLoadSeconds(event, loadingTime);

    if (this.props.progress.selectedbandwidthType >= 0 && loadingTime > 0) {
      this.props.calculateBudget(this.props.progress.bandwidthTypes[this.props.progress.selectedbandwidthType].speed, loadingTime, this.props.progress.bandwidthTypes[this.props.progress.selectedbandwidthType].latency)
    }
  };
  render() {
    const progress = this.props.progress;
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
                 xs={ 1 }
                 md={ 1 }>
            <span><p> { progress.sliderMinValue } seconds </p></span>
            </Col>
            <Col
                 xs={ 9 }
                 md={ 9 }>
            <Slider
                    name="LoadingTime"
                    defaultValue={ progress.loadingTime }
                    step={ progress.sliderStepSize }
                    max={ progress.sliderMaxValue }
                    min={ progress.sliderMinValue }
                    disabled={ progress.sliderDisabled }
                    required={ true }
                    onChange={ this.handleChange.bind(this) } />
            <p>
              <span>{ 'The selected loading time is: ' }</span>
              <h3>{ progress.loadingTime }</h3>
              <span>{ ' from a range of 0.1 to 10 inclusive' }</span>
            </p>
            </Col>
            <Col
                 xs={ 1 }
                 md={ 1 }>
            <span><p> { progress.sliderMaxValue } seconds </p></span>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
;

export default CalculatorSliderLoadingTime;