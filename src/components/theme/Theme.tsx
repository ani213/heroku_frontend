import * as React from 'react';
import red from '@material-ui/core/colors/deepPurple';
import green from '@material-ui/core/colors/green';

import { createTheme, responsiveFontSizes,ThemeProvider} from '@material-ui/core/styles';
const Theme: React.FC<any> =(props)=>{
    const{children}=props;
    const theme = responsiveFontSizes(createTheme({
        palette: {
          primary: {
            main: green[700],
          },
          secondary: {
            main: red[700],
          },
          type:'dark',
        },
      }));
    return(
        <>
         <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>  
        </>
    );
};
export default Theme;