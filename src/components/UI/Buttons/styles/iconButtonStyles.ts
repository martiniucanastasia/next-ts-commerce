import { pxToRem } from "@/styles/_common";
import { ButtonProps } from "../types";

import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
  ThemedStyledProps,
} from "styled-components";

import { getVariantStyles } from "./buttonStyles";
import { getGroupStyles } from "./buttonStyles";

const getIconButtonStyles = ({
  size = "normal",
}: ThemedStyledProps<Pick<ButtonProps, "size">, DefaultTheme>) => {
  const mapper: Record<string, FlattenSimpleInterpolation> = {
    small: css`
      padding: ${pxToRem(7)};
      height: ${pxToRem(30)};
      width: ${pxToRem(30)};
    `,
    normal: css`
      padding: ${pxToRem(10)};
      height: ${pxToRem(40)};
      width: ${pxToRem(40)};
    `,
    large: css`
      padding: ${pxToRem(15)};
      height: ${pxToRem(54)};
      width: ${pxToRem(54)};
    `,
  };

  return mapper[size];
};

export const iconButtonStyled = {
  IconButton: styled.button<Pick<ButtonProps, "size" | "variant" | "visual">>`
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    outline: none;
    appearance: none;
    margin: 0;
    padding: 0;

    cursor: pointer;

    ${getIconButtonStyles};
    ${getVariantStyles};
    ${getGroupStyles};
  `,
};
