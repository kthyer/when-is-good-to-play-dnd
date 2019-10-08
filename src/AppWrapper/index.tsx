import CustomTheme from "components/CustomTheme";
import React, { ReactNode } from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

interface AppWrapperProps {
  children: ReactNode;
}

const AppWrapper = ({ children }: AppWrapperProps) => {
  return (
    <CustomTheme>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        {children}
      </MuiPickersUtilsProvider>
    </CustomTheme>
  );
};

export default AppWrapper;
