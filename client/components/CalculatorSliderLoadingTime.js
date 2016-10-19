import React from 'react';
import Slider from 'material-ui/Slider';
import SvgIcon from 'material-ui/SvgIcon';
import ActionAlarm from 'material-ui/svg-icons/action/alarm';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Divider from 'material-ui/Divider';

const iconStyles = {
  marginRight: 24,
  marginTop: 14,
  flexBasis: 50,
};

const innerFlexLayout = {
  display: 'flex',

};
const item = {
  flexBasis: 50,

}
const slider = {
  flexBasis: 400,
  flexGrow: 1,
}
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
  /**
   * initial calculate budgetload with defaul slider value
   * @return {[type]} [description]
   */
  componentDidMount = () => {
    this.handleChange(this, this.props.progress.loadingTime);
  };
  render() {
    const progress = this.props.progress;
    return (
      <div>
        <h2>2. Select LoadingTime</h2>
        <Divider/>
        <div style={ innerFlexLayout }>
          <ActionAlarm style={ iconStyles } />
          <p style={ item }>
            { progress.sliderMinValue } seconds
          </p>
          <Slider
                  style={ slider }
                  name="LoadingTime"
                  defaultValue={ progress.loadingTime }
                  step={ progress.sliderStepSize }
                  max={ progress.sliderMaxValue }
                  min={ progress.sliderMinValue }
                  disabled={ progress.sliderDisabled }
                  onChange={ this.handleChange.bind(this) } />
          <p style={ item }>
            { progress.sliderMaxValue } seconds
          </p>
        </div>
        <span><p> { 'The selected loading time is: ' } </p></span>
        <h3>{ progress.loadingTime }SEC</h3>
        <span><p> { ' from a range of 0.1 to 10 inclusive' } </p></span>
      </div>

    )
  }
}
;

export default CalculatorSliderLoadingTime;