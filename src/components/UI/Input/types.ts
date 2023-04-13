import { InputHTMLAttributes, ReactElement } from "react";
import { ButtonProps } from "../Buttons/types";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder: string;
  button?: ReactElement<ButtonProps>;
  label?: string;
  visual?: string;
  className?: string;
  hint?: {
    message: string;
    position?: string;
  };
}
