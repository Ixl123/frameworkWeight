import React from 'react';
import { Link } from 'react-router';
import Calculator from './Calculator.js'
import Libraries from './Libraries.js'
import MenuItem from 'material-ui/MenuItem';
import FrameworkWeightAppBar from './AppBar.js';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import ArrowBackward from 'material-ui/svg-icons/navigation/arrow-back';
import Paper from 'material-ui/Paper';
const {Grid, Row, Col} = require('react-flexbox-grid');
const styleRight = {
  margin: 0,
  top: 'auto',
  right: 400,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
};
const styleLeft = {
  margin: 0,
  top: 'auto',
  right: 'auto',
  bottom: 20,
  left: 500,
  position: 'fixed',
};
const Main = React.createClass({
  render() {
    return (
      <div>
        <FrameworkWeightAppBar {...this.props}/>
        <Grid>
          <Row>
            <Col
                 xs={ 12 }
                 md={ 12 }>
            <Calculator {...this.props}/>
            { this.props.progress.seeResults ? <Libraries {...this.props}/> : null }
            </Col>
            <FloatingActionButton
                                  onClick={ this.props.proceedToPreviousStep.bind(this, this.props.progress.step - 1) }
                                  style={ styleLeft }
                                  disabled={ (this.props.progress.step > 0) ? false : true }>
              <ArrowBackward />
            </FloatingActionButton>
            <FloatingActionButton
                                  onClick={ this.props.proceedToNextStep.bind(this, this.props.progress.step + 1) }
                                  style={ styleRight }
                                  disabled={ (this.props.progress.step < 2 & this.props.progress.selectedbandwidthType >= 0) ? false : true }>
              <ArrowForward />
            </FloatingActionButton>
          </Row>
        </Grid>
      </div>
    )
  }
});
export default Main;