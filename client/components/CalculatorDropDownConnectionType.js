import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 200,
  },
};

export default class CalculatorDropDownConnectionType extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
  }

  // handleChange = (event, index, value) => this.setState({
  //   value
  // });

  render() {
    return (
      <div>
        <DropDownMenu
                      value={ this.state.value }
                      onChange={ this.handleChange }>
          <MenuItem
                    value={ 1 }
                    primaryText="Mobile 2G - (35 Kbps)" />
          <MenuItem
                    value={ 2 }
                    primaryText="Mobile 2G - (35 Kbps)" />
          <MenuItem
                    value={ 3 }
                    primaryText="Mobile 2G - (35 Kbps)" />
          <MenuItem
                    value={ 4 }
                    primaryText="Mobile 2G - (35 Kbps)" />
          <MenuItem
                    value={ 5 }
                    primaryText="Mobile 2G - (35 Kbps)" />
        </DropDownMenu>
        <br />
      </div>
      );
  }
}