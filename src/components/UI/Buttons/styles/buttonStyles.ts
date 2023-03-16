import { pxToRem } from "@/styles/_common";
import { ButtonProps, Size, Variant, Visual } from "../types";

import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
  ThemedStyledProps,
} from "styled-components";

const getSizeStyles = ({
  size = "normal",
}: ThemedStyledProps<Pick<ButtonProps, "size">, DefaultTheme>) => {
  const mapper: Record<Size, FlattenSimpleInterpolation> = {
    small: css`
      gap: ${pxToRem(15)};
      padding: ${pxToRem(7)} ${pxToRem(10)};
      min-height: ${pxToRem(30)};
      font-size: var(--text-xxs);

      svg {
        width: ${pxToRem(15)};
        height: ${pxToRem(15)};
      }
    `,

    normal: css`
      gap: ${pxToRem(20)};
      padding: ${pxToRem(10)} ${pxToRem(15)};
      min-height: ${pxToRem(40)};
      font-size: var(--text-s);

      svg {
        width: ${pxToRem(18)};
        height: ${pxToRem(18)};
      }
    `,

    large: css`
      gap: ${pxToRem(20)};
      padding: ${pxToRem(15)} ${pxToRem(20)};
      border-radius: ${pxToRem(8)};
      min-height: ${pxToRem(54)};
      font-size: var(--text-m);

      svg {
        width: ${pxToRem(23)};
        height: ${pxToRem(23)};
      }
    `,
  };

  return mapper[size];
};

export const getVariantStyles = ({
  variant = "primary",
}: ThemedStyledProps<Pick<ButtonProps, "variant">, DefaultTheme>) => {
  const mapper: Record<Variant, FlattenSimpleInterpolation> = {
    primary: css`
      color: white;
      background-image: var(--primary-gradient);

      svg path {
        fill: currentColor;
      }

      :hover {
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
    quaternary: css`
      background-color: var(--secondary);
      color: white;

      svg path {
        fill: currentColor;
      }
    `,
    fifth: css`
      background-color: var(--warning);
      color: white;

      svg path {
        fill: currentColor;
      }
    `,
  };

  return mapper[variant];
};

export const getGroupStyles = ({
  visual = "standart",
}: ThemedStyledProps<Pick<ButtonProps, "visual">, DefaultTheme>) => {
  const mapper: Record<Visual, FlattenSimpleInterpolation> = {
    left: css`
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-top-left-radius: ${pxToRem(8)};
      border-bottom-left-radius: ${pxToRem(8)};
    `,
    center: css`
      border-radius: 0;
    `,
    right: css`
      border-top-right-radius: ${pxToRem(8)};
      border-bottom-right-radius: ${pxToRem(8)};
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    `,
    standart: css`
      border-radius: ${pxToRem(6)};
    `,
  };

  return mapper[visual];
};

const getAvailableStyles = ({
  available,
}: ThemedStyledProps<Pick<ButtonProps, "available">, DefaultTheme>) => {
  if (available === false)
    return css`
      background-image: none;
      background-color: var(--gray-200);
      border: 1px solid var(--gray-300);
      color: var(--gray-500);


      :hover {
        background-image: none;
      }

      svg{
        fill: var(--gray-500);
      }
    `;
};

export const buttonStyled = {
  Button: styled.button<Pick<ButtonProps, "size" | "variant" | "visual" | "available">>`
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    outline: none;
    appearance: none;
    margin: 0;

    cursor: pointer;

    svg {
      flex-shrink: 0;
    }

    ${getSizeStyles}
    ${getVariantStyles}
    ${getGroupStyles}
    ${getAvailableStyles}
  `,
};
