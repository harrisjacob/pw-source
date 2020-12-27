import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
    	main: '#1F2833',
    },
    secondary: {
        light: '#5B5C60',
    	main: '#0B0C10',
    },
    teal: {
    	main: '#66FCF1',
        dark: '#45A29E'
    },
    gray: {
        main: '#C5C6C7',
        dark: '#333333',
    },
    text:{
        primary: '#C5C6C7',
        secondary: '#45A29E',
    },
  },
  typography:{
    h2:{
        fontFamily:'Fjalla One, sansSerif',
    },
    h3:{
        fontFamily:'Fjalla One, sansSerif',
    },
    body1:{
        fontSize: "2rem",
    }
  },
  

});


export default theme;