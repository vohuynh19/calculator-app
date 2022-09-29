import { useEffect } from "react";
import { ThemeMode } from "types";
import { StorageService } from "utils";
import { STORAGE_KEY } from "utils/constants";
import { useTheme } from "utils/context";

import { CalculatorApp } from "views/containers";

function App() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const cachedTheme = StorageService.getItemByKey(STORAGE_KEY.THEME);
    cachedTheme !== theme && setTheme(cachedTheme as ThemeMode);
  }, []);

  return <CalculatorApp />;
}

export default App;
