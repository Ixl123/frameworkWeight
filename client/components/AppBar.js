
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ProgressStepper from './ProgressStepper.js'
import RaisedButton from 'material-ui/RaisedButton';
import { spacing, typography, zIndex } from 'material-ui/styles';
import { cyan500 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionBugReport from 'material-ui/svg-icons/action/bug-report';

export default class DrawerStepper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  handleToggle = () => this.setState({
    open: !this.state.open
  });

  render() {
    const styles = {
      logo: {
        cursor: 'pointer',
        fontSize: 24,
        color: typography.textFullWhite,
        lineHeight: `${spacing.desktopKeylineIncrement}px`,
        fontWeight: typography.fontWeightLight,
        backgroundColor: cyan500,
        paddingLeft: spacing.desktopGutter,
        marginBottom: 8,
      },
      gitLogo: {
        margin: 12,
      }

    };
    return (
      <div>
        <AppBar
                title="FRAMEWORKWEIGHT"
                onLeftIconButtonTouchTap={ this.handleToggle }
                iconElementRight={ <FlatButton
                                               href="https://github.com/Ixl123/frameworkWeight"
                                               secondary={ true }
                                               icon={ <ActionBugReport /> }
                                               style={ styles.gitLogo } /> } />
        <Drawer open={ this.state.open }>
          <div
               style={ styles.logo }
               onTouchTap={ this.handleTouchTapHeader }>
            Steps
          </div>
          <ProgressStepper {...this.props}></ProgressStepper>
        </Drawer>
      </div>
      );
  }
}


