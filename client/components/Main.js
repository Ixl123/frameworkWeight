import React from 'react';
import { Link } from 'react-router';
import Calculator from './Calculator.js'
import Libraries from './Libraries.js'
import AppBar from 'material-ui/AppBar';
import ProgressStepper from './ProgressStepper.js'
const {Grid, Row, Col} = require('react-flexbox-grid');
const Main = React.createClass({
  // load library size on creation
  componentDidMount() {
    this.props.libraries.JavaScriptLibraries.map((javaScriptLibrary, i) => {
      this.props.fetchLibrary(javaScriptLibrary.libraryURL, i, 'JS')

    });
    this.props.libraries.CSSLibraries.map((CSSLibrary, i) => {
      this.props.fetchLibrary(CSSLibrary.libraryURL, i, 'CSS')
    });
  },
  render() {
    return (
      <div>
        <AppBar
                title="FrameworkWeight"
                showMenuIconButton={ false } />
        <ProgressStepper {...this.props}></ProgressStepper>
        <Grid>
          <Row>
            <Col
                 xs={ 12 }
                 md={ 12 }>
            <Calculator {...this.props}/>
            { this.props.progress.seeResults ? <Libraries {...this.props}/> : null }
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
});
export default Main;