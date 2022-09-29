import { useRef } from "react";

import { ButtonProps } from "./types";

import "./index.css";

const Button: React.FC<ButtonProps> = ({ children, isBlock, ...props }) => {
  const ref = useRef<any>(null);

  const _handleShowShadowEffect = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e = e || window.event;
    e.preventDefault();

    ref.current.classList.add("opacity");

    setTimeout(() => {
      ref.current.classList.remove("opacity");
    }, 100);
  };

  return (
    <button
      {...props}
      ref={ref}
      className={`btn${isBlock ? " blocked" : ""} ${props.className}`}
      onClick={(event) => {
        _handleShowShadowEffect(event);
        props?.onClick?.(event);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
