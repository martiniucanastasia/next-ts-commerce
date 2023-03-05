import { pxToRem } from "@/styles/_common";
import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
  ThemedStyledProps,
} from "styled-components";
import { ButtonProps } from "../types";

const getSizeStyles = ({
  size = "normal",
}: ThemedStyledProps<Pick<ButtonProps, "size">, DefaultTheme>) => {
  const mapper: Record<string, FlattenSimpleInterpolation> = {
    small: css`
      padding: ${pxToRem(7)} ${pxToRem(10)};
      font-size: var(--text-xs);

      & svg path {
        width: ${pxToRem(15)};
      }
    `,
    normal: css`
      padding: ${pxToRem(10)} ${pxToRem(15)};
      font-size: var(--text-s);

      & svg path {
        width: ${pxToRem(18)};
      }
    `,
    large: css`
      padding: ${pxToRem(15)} ${pxToRem(15)};
      font-size: var(--text-m);

      & svg path {
        width: ${pxToRem(23)};
      }
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

      svg path {
        fill: white;
      }

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

      svg path {
        fill: currentColor;
      }
    `,
    tertiary: css`
      background-color: white;
      border: 1px solid var(--gray-300);
      color: var(--danger);

      svg path {
        fill: currentColor;
      }
    `,
  };

  return mapper[variant];
};

export const buttonStyled = {
  Button: styled.button<Pick<ButtonProps, "variant" | "size">>`
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    outline: none;
    appearance: none;
    margin: 0;
    padding: 0;
    border-radius: ${pxToRem(8)};
    gap: ${pxToRem(20)};

    transition: background-color 1s ease;
    cursor: pointer;

    ${getSizeStyles};
    ${getVariantStyles};
  `,
};
