import { pxToRem } from "@/styles/_common";
import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
  ThemedStyledProps,
} from "styled-components";
import { ButtonProps } from "../types";

const getSizeStyles = ({
  size = "base",
}: ThemedStyledProps<Pick<ButtonProps, "size">, DefaultTheme>) => {
  const mapper: Record<string, FlattenSimpleInterpolation> = {
    small: css`
      padding: ${pxToRem(7)} ${pxToRem(10)};
      font-size: var(--text-xs);
    `,
    base: css`
      padding: ${pxToRem(10)} ${pxToRem(16)};
      font-size: var(--text-s);
    `,
    large: css`
      padding: ${pxToRem(16)} ${pxToRem(20)};
      font-size: var(--text-m);
    `,
  };

  return mapper[size];
};

const getVariantStyles = ({
  variant = "primary",
}: ThemedStyledProps<Pick<ButtonProps, "variant">, DefaultTheme>) => {
  const mapper: Record<string, FlattenSimpleInterpolation> = {
    primary: css`
      color: white;
      background-image: var(--primary-gradient);

      &:hover {
        background-image: linear-gradient(
          to right,
          rgba(0, 103, 255, 1) 0%,
          rgba(18, 127, 255, 1) 100%
        );
      }
    `,
    secondary: css`
      background-color: white;
      border: 1px solid var(--gray-300);
      color: var(--primary);
    `,
    tertiary: css`
      background-color: white;
      border: 1px solid var(--gray-300);
      color: var(--danger);
    `,
  };

  return mapper[variant];
};

export const buttonStyled = {
  Button: styled.button<Pick<ButtonProps, "variant" | "size">>`
    border: none;
    outline: none;
    appearance: none;
    border-radius: ${pxToRem(6)};

    transition: background-color 1s ease;
    cursor: pointer;

    ${getSizeStyles};
    ${getVariantStyles};
  `,
};
