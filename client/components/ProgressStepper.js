import React from 'react';
import { Step, Stepper, StepLabel, StepButton } from 'material-ui/Stepper';
import MenuItem from 'material-ui/MenuItem';

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
        <Stepper
                 linear={ false }
                 orientation="vertical"
                 activeStep={ this.props.progress.step }
                 style={ { boxSizing: 'content-box' } }>
          <Step style={ { boxSizing: 'content-box' } }>
            <StepButton onClick={ this.props.proceedToNextStep.bind(this, 0) }>
              <StepLabel style={ { boxSizing: 'content-box', fontSize: 20 } }>
                Select Bandtwith type
              </StepLabel>
            </StepButton>
          </Step>
          <Step style={ { boxSizing: 'content-box' } }>
            <StepButton
                        onClick={ this.props.proceedToNextStep.bind(this, 1) }
                        disabled={ this.props.progress.selectedbandwidthType >= 0 ? false : true }>
              <StepLabel style={ { boxSizing: 'content-box', fontSize: 20 } }>
                Select loading time
              </StepLabel>
            </StepButton>
          </Step>
          <Step style={ { boxSizing: 'content-box' } }>
            <StepButton
                        onClick={ this.props.proceedToNextStep.bind(this, 2) }
                        disabled={ this.props.progress.selectedbandwidthType >= 0 ? false : true }>
              <StepLabel
                         className="boxSizing"
                         style={ { boxSizing: 'content-box', fontSize: 20 } }>
                See Results
              </StepLabel>
            </StepButton>
          </Step>
        </Stepper>
      </div>
      );
  }
}

export default ProgressStepper;