// let's go!
import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import components

import Main from './components/Main.js';
import injectTapEventPlugin from 'react-tap-event-plugin';

// import material design
// 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

const App = () => (
<MuiThemeProvider>
  <Main/>
</MuiThemeProvider>
);

render(<App/>, document.getElementById('root'));
