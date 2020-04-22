import React, { ReactNode } from "react";

import CustomTheme from "components/CustomTheme";
import DateFnsUtils from "@date-io/date-fns";
import { LocalizationProvider } from "@material-ui/pickers";

interface AppProvidersProps {
  children: ReactNode;
}

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <CustomTheme>
      <LocalizationProvider dateAdapter={DateFnsUtils}>
        {children}
      </LocalizationProvider>
    </CustomTheme>
  );
};

export default AppProviders;
