import { createMuiTheme } from '@material-ui/core';
import green from '@material-ui/core/colors/green';

export default createMuiTheme({
  overrides: {
    MuiBackdrop: {
      invisible: {
        backgroundColor: 'transparent',
        backdropFilter: 'none'
      },
      root: {
        backdropFilter: 'blur(2px)'
      }
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  },
  palette: {
    primary: { main: 'rgba(28, 151, 204, 1)' },
    secondary: green
  }
});
