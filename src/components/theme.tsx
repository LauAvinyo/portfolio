import { createMuiTheme } from '@material-ui/core/styles';
import "typeface-nunito"
import "typeface-lato";
import "typeface-poppins";

export default createMuiTheme({
    palette: {
      primary: {
        main: '#01579b',
      },
      secondary: {
        main: '#fbc02d',
      },
    },
    typography: {
      fontFamily: [
        "Nunito",
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif'
      ].join(','),
      h1:{
        fontFamily: [
          'Poppins',
          'Helvetica',
          'Arial',
          'sans-serif'
        ].join(','),
        fontSize: "5rem",
        textAlign: 'center', 
        fontWeight: 300, 
        marginBottom: 10,
      }, 
      h2:{
        fontFamily: [
          'Poppins',
          'Helvetica',
          'Arial',
          'sans-serif'
        ].join(','),
        fontSize: "2rem",
        textAlign: 'start', 
        fontWeight: 200, 
        marginBottom: 6,
      }, 
      h3:{
        fontFamily: [
          'Poppins',
          'Helvetica',
          'Arial',
          'sans-serif'
        ].join(','),
        fontSize: "1rem",
        textAlign: 'center', 
        fontWeight: 500, 
        marginBottom: 6,
      },
      h4:{
        fontFamily: [
          'Poppins',
          'Helvetica',
          'Arial',
          'sans-serif'
        ].join(','),
        fontSize: "1.2rem",
        textAlign: 'start', 
        fontWeight: 400, 
        marginBottom: 6,
      }
    }, 
    
});
