import React from 'react';
import ReactDOM from 'react-dom';

import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import {red} from '@material-ui/core/colors';
import App from './components/App';
import {register} from './ServiceWorker';
import Firebase, {FirebaseContext} from './components/Firebase';


// Building theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3572F1',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#EBEBEB',
    },
  },
});

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <ThemeProvider theme={theme}>
      <div>
        <h1>Test</h1>
      </div>
      <App />
    </ThemeProvider>
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);

// Service registration
register();
