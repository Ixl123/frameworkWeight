import React from 'react';
import { Link } from 'react-router';
import LibrariesGrid from './LibrariesGrid.js';
import LibrariesSelectionChips from './LibrariesSelectionChips.js';
import Divider from 'material-ui/Divider';
const Libraries = React.createClass({

  render() {
    return (
      <div className="libraries">
        <LibrariesSelectionChips></LibrariesSelectionChips>
        <Divider></Divider>
        <LibrariesGrid></LibrariesGrid>
      </div>
    )
  }
});

export default Libraries;