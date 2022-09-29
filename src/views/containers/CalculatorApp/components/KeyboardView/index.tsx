import { FC } from "react";
import { CalculatorService } from "utils/services/CalculatorService";
import { Button } from "views/components";

import "./style.css";
import { KeyboardViewProps, KeyList } from "./types";

const KeyboardView: FC<KeyboardViewProps> = ({ displayRef }) => {
  return (
    <div className="keyboard-wrapper">
      {keys(displayRef).map((rowItems, index) => (
        <div key={index} className="keyboard-row">
          {rowItems.map((item) => (
            <Button
              key={item.title}
              className={`grid-button ${item.extraClass || ""}`}
              isBlock={item.isBlock}
              onClick={item.onClick}
            >
              {item.title}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};

const keys: KeyList = (displayRef) => {
  const handleClickNumber = (num: string) => {
    if (displayRef.current?.isWaitNewNum) {
      displayRef.current?.onChangeText(num);
      displayRef.current?.setIsWaitNewNum(false);
    } else {
      displayRef.current?.onChangeText(
        CalculatorService.handleClickNumberButton(
          displayRef.current?.currentText || "",
          num
        )
      );
    }
  };

  const handleClickOperator = (opt: string) => {
    displayRef.current?.onChangeText(
      CalculatorService.handleClickOperatorButton(
        displayRef.current?.currentText || "",
        opt
      )
    );
    displayRef.current?.setIsWaitNewNum(false);
  };

  return [
    [
      {
        title: "AC",
        extraClass: "secondary",
        onClick: () => displayRef.current?.resetResult(),
      },
      {
        title: "DL",
        extraClass: "secondary",
        onClick: () => {
          displayRef.current?.onChangeText(
            displayRef.current?.currentText.substring(
              0,
              displayRef.current?.currentText.length - 1
            )
          );
        },
      },
      { title: "%", extraClass: "secondary", isBlock: true, onClick: () => {} },
      {
        title: "÷",
        extraClass: "primary",
        onClick: () => handleClickOperator("÷"),
      },
    ],
    [
      {
        title: "7",
        onClick: () => handleClickNumber("7"),
      },
      {
        title: "8",
        onClick: () => handleClickNumber("8"),
      },
      {
        title: "9",
        onClick: () => handleClickNumber("9"),
      },
      {
        title: "x",
        extraClass: "primary",
        onClick: () => handleClickOperator("x"),
      },
    ],
    [
      {
        title: "4",
        onClick: () => handleClickNumber("4"),
      },
      {
        title: "5",
        onClick: () => handleClickNumber("5"),
      },
      {
        title: "6",
        onClick: () => handleClickNumber("6"),
      },
      {
        title: "-",
        extraClass: "primary",
        onClick: () => handleClickOperator("-"),
      },
    ],
    [
      {
        title: "1",
        onClick: () => handleClickNumber("1"),
      },
      {
        title: "2",
        onClick: () => handleClickNumber("2"),
      },
      {
        title: "3",
        onClick: () => handleClickNumber("3"),
      },
      {
        title: "+",
        extraClass: "primary",
        onClick: () => handleClickOperator("+"),
      },
    ],
    [
      {
        title: "0",
        extraClass: "extend",
        onClick: () => handleClickNumber("0"),
      },
      {
        title: ".",
        onClick: () => {
          displayRef.current?.onChangeText(
            CalculatorService.handleClickOperatorButton(
              displayRef.current?.currentText || "",
              "."
            )
          );
        },
      },
      {
        title: "=",
        extraClass: "primary",
        onClick: () => {
          displayRef.current?.onChangeText(displayRef.current.result);
          displayRef.current?.onChangePreviousText(displayRef.current.result);
          displayRef.current?.setIsWaitNewNum(true);
        },
      },
    ],
  ];
};

export default KeyboardView;
