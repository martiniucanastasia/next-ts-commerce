import { ReactElement } from "react";
import { ButtonProps } from "../Buttons/types";

export interface InputProps {
  isTextarea?: boolean;
  placeholder: string;
  button?: ReactElement<ButtonProps>;
  label?: string;
  visual?: string;
  hint?: {
    message: string;
    position?: string;
  };
}
