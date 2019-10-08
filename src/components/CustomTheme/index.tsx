import React, { ReactNode } from "react";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

interface CustomThemeProps {
  children: ReactNode;
}

let darkTheme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

darkTheme = responsiveFontSizes(darkTheme);

const CustomTheme = ({ children }: CustomThemeProps) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomTheme;
