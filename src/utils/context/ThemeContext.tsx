import React, { Dispatch, useContext, useState, useEffect } from "react";

import { StorageService } from "utils/services";
import { STORAGE_KEY } from "utils/constants";
import { changeTheme } from "utils/functions";

import { ThemeMode } from "types";

interface IState {
  setTheme: Dispatch<ThemeMode>;
  theme: ThemeMode;
}

const defaultState = {
  setTheme: () => {},
  theme: ThemeMode.LIGHT,
};

type ThemeProviderProps = {
  children: any;
};

const ThemeContext = React.createContext<IState>(defaultState);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(defaultState.theme);

  useEffect(() => {
    changeTheme(theme);
    StorageService.storeItemByKey(STORAGE_KEY.THEME, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  return useContext(ThemeContext);
}

export { ThemeProvider, ThemeContext };
