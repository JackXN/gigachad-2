import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    overlay: "rgba(21,19,19,0.39)",
    dark: "#1C1F2E",
  },
  fonts: {
    main: "sans,serif, Roboto",
    mont: "Montserrat",
  },
  fontSizes: {
    small: "0.9em",
    medium: "2em",
    large: "30em",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
