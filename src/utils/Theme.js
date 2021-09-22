import React from 'react';
import {ThemeProvider} from 'styled-components'

const theme = {
    colors: {
      overlay: 'rgba(21,19,19,0.39)',
    },
    fonts: ['sans-serif', 'Roboto'],
    fontSizes: {
      small: '1em',
      medium: '2em',
      large: '30em'
    }
  }



  const Theme = ({children}) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )


  export default Theme;


