import { useTheme } from "utils/context";

import { Button } from "views/components";
import DisplayView from "./components/DisplayView";
import KeyboardView from "./components/KeyboardView";

import { ThemeMode } from "types";

import "./style.css";
import { useRef } from "react";
import { DisplayHandle } from "./components/DisplayView/types";

const CalculatorApp = () => {
  const { theme, setTheme } = useTheme();
  const displayRef = useRef<DisplayHandle>(null);

  return (
    <div className="wrapper">
      <div className="calculator">
        <Button
          onClick={() =>
            setTheme(
              theme === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK
            )
          }
          className={"btn-float"}
        >
          {theme === ThemeMode.DARK ? "D" : "L"}
        </Button>
        <DisplayView ref={displayRef} />
        <KeyboardView displayRef={displayRef} />
      </div>
    </div>
  );
};

export default CalculatorApp;
