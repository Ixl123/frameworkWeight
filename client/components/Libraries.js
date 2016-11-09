import React from 'react';
import { Link } from 'react-router';
import LibrariesSelectionChips from './LibrariesSelectionChips.js';
import Divider from 'material-ui/Divider';
const Libraries = React.createClass({
  render() {
    const progress = this.props.progress;
    return (
      <div className="libraries">
        { progress.step === 2 ?
          
          <div>
            <h2>3.Results</h2>
            <Divider/>
            <span><h4>Total budget:</h4> <h3>{ this.props.progress.budget }KB</h3></span>
            <span><h4>Actual budget:</h4> <h3>{ this.props.progress.actualBudget } KB</h3></span>
            <p>
              Frontend libraries which fit in this budget (only the first 50 are displayed at the same time feel free to search for a specific framework.)
            </p>
            <LibrariesSelectionChips {...this.props}></LibrariesSelectionChips>
            <Divider/>
          </div>
          : null }
      </div>

    )
  }
});

export default Libraries;