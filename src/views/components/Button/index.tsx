import { ButtonProps } from "./types";
import "./index.css";
import { useRef } from "react";

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const ref = useRef<any>(null);

  const _handleShowShadowEffect = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e = e || window.event;
    e.preventDefault();

    ref.current.classList.add("highlight");

    setTimeout(() => {
      ref.current.classList.remove("highlight");
    }, 300);
  };

  return (
    <button
      {...props}
      ref={ref}
      className={`btn ${props.className}`}
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
