import { MouseEventHandler } from "react";

export interface ButtonProps {
  size: string;
  variant: string;
  visual?: string;
  onClick?: (() => void) | MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}
