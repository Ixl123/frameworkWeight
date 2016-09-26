import React from 'react';
import { Link } from 'react-router';
import Calculator from './Calculator.js'
import Libraries from './Libraries.js'
import AppBar from 'material-ui/AppBar';
import ProgressStepper from './ProgressStepper.js'
const {Grid, Row, Col} = require('react-flexbox-grid');
const Main = React.createClass({
  render() {
    return (
      <div>
        <AppBar
                title="FrameworkWeight"
                showMenuIconButton={ false } />
        <Grid>
          <Row>
            <Col
                 xs={ 12 }
                 md={ 12 }>
            <ProgressStepper></ProgressStepper>
            </Col>
          </Row>
          <Row>
            <Col
                 xs={ 12 }
                 md={ 12 }>
            <Calculator></Calculator>
            <Libraries></Libraries>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
});
export default Main;