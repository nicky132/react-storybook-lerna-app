import React, { FC } from 'react';
import './Button.css';
import { ButtonProps } from './Button.type';
import { sayHello } from '@nicky/theme';
const Button: FC<ButtonProps> = (props) => {
  const { type = 'default', text = 'button1234', onClick } = props;
  const clickBtn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    sayHello();
    onClick && onClick(e);
  };
  return (
    <button type="button" className={`Button Btn-${type}`} onClick={clickBtn}>
      {text}
    </button>
  );
};
export default Button;
