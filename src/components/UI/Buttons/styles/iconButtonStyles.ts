import { pxToRem } from "@/styles/_common";

import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
  ThemedStyledProps,
} from "styled-components";

import { Button } from "../Button";
import { ButtonProps } from "../types";

const getSizeStyles = ({
  size = "base",
}: ThemedStyledProps<Pick<ButtonProps, "size">, DefaultTheme>) => {
  const mapper: Record<string, FlattenSimpleInterpolation> = {
    small: css`
      & svg {
        width: ${pxToRem(15)};
      }
    `,
    base: css`
      & svg {
        width: ${pxToRem(18)};
      }
    `,
    large: css`
      & svg {
        width: ${pxToRem(24)};
      }
    `,
  };

  return mapper[size];
};

export const iconButtonStyled = {
  Button: styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;

    ${getSizeStyles}
  `,
};
