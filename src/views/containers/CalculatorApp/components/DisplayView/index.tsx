import {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { CalculatorService } from "utils/services/CalculatorService";

import "./style.css";
import { DisplayHandle, DisplayProps, HistoryType } from "./types";

const DisplayView: ForwardRefRenderFunction<DisplayHandle, DisplayProps> = (
  {},
  ref
) => {
  const resultRef = useRef<any>(null);

  const [previousResults, setPreviousResults] = useState<HistoryType[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [isWaitNewNum, setIsWaitNewNum] = useState(false);

  useEffect(() => {
    console.log(CalculatorService.handleCalculate(currentText));
    if (resultRef?.current) {
      if (!isNaN(CalculatorService.handleCalculate(currentText))) {
        resultRef.current.innerText = `= ${CalculatorService.handleCalculate(
          currentText
        )}`;
      }
    }
  }, [currentText]);

  useImperativeHandle(ref, () => {
    return {
      isWaitNewNum: isWaitNewNum,
      setIsWaitNewNum: setIsWaitNewNum,
      currentText: currentText,
      previousResults: previousResults,
      result: (
        CalculatorService.handleCalculate(currentText) ||
        resultRef?.current?.innerText?.substr(
          2,
          resultRef?.current?.innerText?.length
        )
      ).toString(),
      onChangeText: (text: string) => {
        setCurrentText(text);
      },
      onChangePreviousText: (text: string) => {
        setPreviousResults((prev) => [
          ...prev,
          {
            createdAt: Date.now().toString(),
            text: text,
          },
        ]);
      },
      resetResult: () => {
        setPreviousResults([]);
        setCurrentText("");
        resultRef.current.innerText = "= 0";
      },
    };
  });

  return (
    <div className="display-wrapper">
      {previousResults.map((item) => (
        <div key={item.createdAt} className="text--previous">
          {item.text}
        </div>
      ))}

      <div className="text--current">{currentText}</div>
      <div className="text--result" ref={resultRef} />
    </div>
  );
};

export default forwardRef(DisplayView);
