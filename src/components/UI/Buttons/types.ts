import { MouseEventHandler } from "react";

export type Size = "small" | "normal" | "large";
export type Variant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary"
  | "fifth";
export type Visual = "left" | "center" | "right" | "standart";

export interface ButtonProps {
  size?: Size;
  variant?: Variant;
  visual?: Visual;
  className?: string;
  available?: boolean;
  disabled?: boolean;
  onClick?: (() => void) | MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}
