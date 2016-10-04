import React from 'react';
import { Link } from 'react-router';

import LibrariesSelectionChips from './LibrariesSelectionChips.js';
import Divider from 'material-ui/Divider';
const Libraries = React.createClass({
  render() {
    return (
      <div className="libraries">
        <span><h3>Your total budget:</h3> <h2>{ this.props.progress.budget }KB</h2></span>
        <p>
          Frontend libraries which fit in this budget
        </p>
        <LibrariesSelectionChips {...this.props}></LibrariesSelectionChips>
        <Divider/>
      </div>
    )
  }
});

export default Libraries;