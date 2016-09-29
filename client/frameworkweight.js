// let's go!
import React from 'react';
import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import components


import injectTapEventPlugin from 'react-tap-event-plugin';

// import material design
// 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

//redux
import { Provider } from 'react-redux';

import store from './store.js';

import AppFrameworkWeight from './components/AppFrameworkWeight'

const App = () => (
<MuiThemeProvider>
  <AppFrameworkWeight/>
</MuiThemeProvider>

);

render(<Provider store={ store }>
         <App/>
       </Provider>, document.getElementById('root'));
