import { useState } from "react";
import "./style.css";

const DisplayView = () => {
  const [previousText, setPreviousText] = useState("10");

  const [currentText, setCurrentText] = useState("10x3");

  return (
    <div className="display-wrapper">
      <div className="text--previous">{previousText}</div>
      <div className="text--current">{currentText}</div>
    </div>
  );
};

export default DisplayView;
