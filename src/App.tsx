import { useEffect } from "react";

import { useTheme, StorageService } from "utils";

import { CalculatorApp } from "views/containers";

import { StorageKey, ThemeMode } from "types";

function App() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const cachedTheme = StorageService.getItemByKey(StorageKey.THEME);
    if (cachedTheme) {
      cachedTheme !== theme && setTheme(cachedTheme as ThemeMode);
    }
  }, []);

  return <CalculatorApp />;
}

export default App;
