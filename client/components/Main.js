import React from 'react';
import { Link } from 'react-router';
import Calculator from './Calculator.js'
import Libraries from './Libraries.js'
import AppBar from 'material-ui/AppBar';

const Main = React.createClass({
  render() {
    return (

      <div>
        <AppBar
                title="PBAS"
                showMenuIconButton={ false } />
        <h1><Link> PBAS </Link></h1>
        <h2>which frontend library can I use?</h2>
        <div className="row center-xs">
          <div class="col-xs-8">
            <div class="box">
              <Calculator></Calculator>
              <Libraries></Libraries>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
export default Main;