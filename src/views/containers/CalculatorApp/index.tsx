import { Button } from "views/components";

import { useTheme } from "utils/context";

import { ThemeMode } from "types";

const CalculatorApp = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="wrapper">
      <Button
        onClick={() =>
          setTheme(theme === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK)
        }
      >
        Change Theme
      </Button>
      <Button>Click Me</Button>
      <Button>Click Me</Button>
    </div>
  );
};

export default CalculatorApp;
