import { MouseEventHandler, ReactNode } from 'react';
export interface ButtonProps {
  type?: 'default' | 'primary' | 'secondary';
  text: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
