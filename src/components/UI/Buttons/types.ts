import { MouseEventHandler } from "react";

export interface ButtonProps {
  size: string;
  variant: string;
  onClick?: (() => void) | MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}
