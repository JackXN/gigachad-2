import React from "react";
import { ThemeProvider } from "styled-components";
import Background from '../Assets/images/background_1@2x.png';

export const theme = {
  colors: {
    overlay: "rgba(21,19,19,0.39)",
    dark: "#1C1F2E",
  },
  background: {
      bg: `${Background}`
  },
  fonts: {
    main: "sans,serif, Roboto",
    mont: "Montserrat",
    header: 'Poppins',
  },
  fontSizes: {
    small: "0.9em",
    medium: "1.5em",
    large: "30em",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
