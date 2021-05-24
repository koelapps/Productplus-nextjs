import { createMuiTheme } from '@material-ui/core/styles';

const prodBlue = '#0B72B9';
const prodOrange = '#FFBA60';
const arcGrey = '#868686';

export default createMuiTheme({
  palette: {
    common: {
      blue: `${prodBlue}`,
      orange: `${prodOrange}`,
    },
    primary: {
      main: `${prodBlue}`,
    },
    secondary: {
      main: `${prodOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '0.9rem',
    },
    estimate: {
      fontFamily: 'pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'black',
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: prodBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'pacifico',
      fontSize: '2.5rem',
      color: prodBlue,
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      color: prodBlue,
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
      fontFamily: 'Raleway',
      color: prodBlue,
      lineHeight: 1,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: arcGrey,
    },
    subtitle2: {
      color: 'white',
      fontSize: '1.25rem',
      fontWeight: 300,
    },
    body1: {
      fontSize: '1.25rem',
      color: arcGrey,
      fontWeight: 300,
    },
    caption: {
      fontSize: '1rem',
      fontWeight: 300,
      color: arcGrey,
    },
    learnButton: {
      borderColor: prodBlue,
      color: prodBlue,
      borderWidth: 2,
      textTransform: 'none',
      borderRadius: 50,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: prodBlue,
        fontSize: '1rem',
      },
    },
    MuiInput: {
      root: {
        color: arcGrey,
        fontWeight: 300,
      },
      underline: {
        '&:before': {
          borderBottom: `2px solid ${prodBlue}`,
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid ${prodBlue}`,
        },
      },
    },
  },
});
