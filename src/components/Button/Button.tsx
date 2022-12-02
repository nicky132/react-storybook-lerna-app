import React, { FC } from 'react';
import './Button.css';
import { ButtonProps } from './Button.type';
const Button: FC<ButtonProps> = (props) => {
  const { type = 'default', text = 'button', onClick } = props;
  return (
    <button type="button" className={`Button Btn-${type}`} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
