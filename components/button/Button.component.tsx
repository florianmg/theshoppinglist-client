import { ButtonPropsTypes } from "./button.types";

const Button: React.FC<ButtonPropsTypes> = ({text, onClick}) => {
  return <button onClick={onClick}>{text}</button>
}

export default Button;