import { useState } from "react";
import "./style.css";

const DisplayView = () => {
  const [previousText, setPreviousText] = useState("previous");

  const [currentText, setCurrentText] = useState("current");

  return (
    <div className="display-wrapper">
      <div className="text--previous">{previousText}</div>
      <div className="text--current">{currentText}</div>
    </div>
  );
};

export default DisplayView;
