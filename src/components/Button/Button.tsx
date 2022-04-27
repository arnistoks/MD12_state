import { FC } from 'react';
import './button.scss';

type ButtonProps = {
    text: string
    clickHandler: () => void
}

const Button:FC<ButtonProps> = ({ text, clickHandler }) => (
  <button className="button" onClick={clickHandler}>{text}</button>
);

export default Button;
