import type { ButtonProps } from '../types';

const Button = ({ label, color = 'gray' }: ButtonProps) => {
  return <button style={{ backgroundColor: color }}>{label}</button>;
};

export default Button;
