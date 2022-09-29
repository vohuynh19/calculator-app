import { Button } from "views/components";

import "./style.css";

const KeyboardView = () => {
  return (
    <div className="keyboard-wrapper">
      {keys.map((rowItems, index) => (
        <div key={index}>
          {rowItems.map((item) => (
            <Button
              key={item.title}
              className={`grid-button ${item.extraClass}`}
              isBlock={item.isBlock}
            >
              {item.title}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};

const keys = [
  [
    { title: "AC", extraClass: "secondary" },
    { title: "+/-", extraClass: "secondary", isBlock: true },
    { title: "%", extraClass: "secondary", isBlock: true },
    { title: "÷", extraClass: "primary" },
  ],
  [
    { title: "7", extraClass: "" },
    { title: "8", extraClass: "" },
    { title: "9", extraClass: "" },
    { title: "x", extraClass: "primary" },
  ],
  [
    { title: "4", extraClass: "" },
    { title: "5", extraClass: "" },
    { title: "6", extraClass: "" },
    { title: "-", extraClass: "primary" },
  ],
  [
    { title: "1", extraClass: "" },
    { title: "2", extraClass: "" },
    { title: "3", extraClass: "" },
    { title: "+", extraClass: "primary" },
  ],
  [
    { title: "0", extraClass: "extend" },
    { title: ".", extraClass: "" },
    { title: "=", extraClass: "primary" },
  ],
];

export default KeyboardView;
