import { ThemeMode } from "types";
import { useTheme } from "utils/context";
import { Button } from "views/components";

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
