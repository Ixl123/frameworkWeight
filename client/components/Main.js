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
import IconButton from 'material-ui/IconButton';
import keydown from 'react-keydown';
const styles = {
  styleLeft: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  },
  styleRight: {
    margin: 0,
    top: 'auto',
    right: 'auto',
    bottom: 20,
    left: 275,
    position: 'fixed'
  },
  dockedDrawerPadding: {
    paddingLeft: 256,
    marginTop: 48,
    marginLeft: 80,
    marginRight: 80,
    marginBottom: 48,
  },
  paperContainer: {
    paddingTop: 24,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 24,

  },
};

class Main extends React.Component {
  /**
   * wrapper do react on arrow key right and left
   */
  @keydown('right', 'left') // or specify `which` code directly, in this case 13 
  submit(event) {
    if (event.keyCode === 39) {
      // do something, or not, with the keydown event, maybe event.preventDefault() 
      if (this.props.progress.step < 2 & this.props.progress.selectedbandwidthType >= 0) {
        this.props.proceedToNextStep(this.props.progress.step + 1);
      }

    }
    if (event.keyCode === 37) {
      // do something, or not, with the keydown event, maybe event.preventDefault() 
      if (this.props.progress.step > 0) {
        this.props.proceedToPreviousStep(this.props.progress.step - 1);
      }
    }
  }



  render() {
    return (
      <div>
        <FrameworkWeightAppBar {...this.props}/>
        <div style={ styles.dockedDrawerPadding }>
          <Paper style={ styles.paperContainer }>
            <Calculator {...this.props}/>
            <Libraries {...this.props}/>
            <FloatingActionButton
                                  title="go to previous step"
                                  onClick={ this.props.proceedToPreviousStep.bind(this, this.props.progress.step - 1) }
                                  style={ styles.styleRight }
                                  disabled={ (this.props.progress.step > 0) ? false : true }>
              <ArrowBackward />
            </FloatingActionButton>
            <FloatingActionButton
                                  title="go to next step"
                                  onClick={ this.props.proceedToNextStep.bind(this, this.props.progress.step + 1) }
                                  style={ styles.styleLeft }
                                  disabled={ (this.props.progress.step < 2 & this.props.progress.selectedbandwidthType >= 0) ? false : true }>
              <ArrowForward />
            </FloatingActionButton>
          </Paper>
        </div>
      </div>
    )
  }
}
export default Main;