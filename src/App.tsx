import { useEffect } from "react";

import { STORAGE_KEY, useTheme, StorageService } from "utils";

import { CalculatorApp } from "views/containers";

import { ThemeMode } from "types";

function App() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const cachedTheme = StorageService.getItemByKey(STORAGE_KEY.THEME);
    if (cachedTheme) {
      cachedTheme !== theme && setTheme(cachedTheme as ThemeMode);
    }
  }, []);

  return <CalculatorApp />;
}

export default App;
