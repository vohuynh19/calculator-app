import "./style.css";
import { useTheme } from "utils/context";

import { Button } from "views/components";
import DisplayView from "./components/DisplayView";
import KeyboardView from "./components/KeyboardView";

import { ThemeMode } from "types";

const CalculatorApp = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="wrapper">
      <Button
        onClick={() =>
          setTheme(theme === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK)
        }
        className={"btn-float"}
      >
        Change Theme
      </Button>

      <div className="calculator">
        <DisplayView />
        <KeyboardView />
      </div>
    </div>
  );
};

export default CalculatorApp;
