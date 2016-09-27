import React from 'react';
import { Step, Stepper, StepLabel, } from 'material-ui/Stepper';


/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
class ProgressStepper extends React.Component {

  render() {

    return (
      <div style={ { width: '100%', maxWidth: 900, margin: 'auto' } }>
        <Stepper activeStep={ this.props.progress.stepp }>
          <Step>
            <StepLabel>
              Select Bandtwith type
            </StepLabel>
          </Step>
          <Step>
            <StepLabel>
              Select loading time
            </StepLabel>
          </Step>
          <Step>
            <StepLabel>
              See Results
            </StepLabel>
          </Step>
        </Stepper>
      </div>
      );
  }
}

export default ProgressStepper;