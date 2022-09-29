import { ButtonProps } from "./types";
import "./index.css";

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`btn ${props.className}`}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
};

export default Button;
