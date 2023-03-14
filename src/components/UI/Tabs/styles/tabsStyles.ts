import { pxToRem } from "@/styles/_common";
import { TabsProps, Variant } from "../types";
import styled, {
  DefaultTheme,
  FlattenInterpolation,
  ThemedStyledProps,
  css,
} from "styled-components";

export const getVariantStyles = ({
  variant = "primary",
}: ThemedStyledProps<Pick<TabsProps, "variant">, DefaultTheme>) => {
  const mapper: Record<Variant, FlattenInterpolation<any>> = {
    primary: css<{ disabled: boolean }>`
      border-radius: ${pxToRem(6)};
      font-weight: ${({ disabled }) => (disabled ? "500" : "400")};
      color: ${({ disabled }) =>
        disabled ? "var(--gray-700)" : "var(--gray-600)"};
      background: ${({ disabled }) =>
        disabled ? "var(--primary-100)" : "none"};
    `,
    secondary: css<{ disabled: boolean }>`
      font-weight: 400;
      color: ${({ disabled }) =>
        disabled ? "var(--primary)" : "var(--gray-600)"};
      background: none;
      border-bottom: 2px solid
        ${({ disabled }) => (disabled ? "var(--primary)" : "var(--gray-300)")};

      :first-child {
        margin-left: ${pxToRem(15)};
      }
      :last-child {
        margin-right: ${pxToRem(15)};
      }
    `,
  };

  return mapper[variant];
};
const getTabsWrapper = ({
  variant,
}: ThemedStyledProps<Pick<TabsProps, "variant">, DefaultTheme>) => {
  if (variant === "secondary") {
    return css`
      background: linear-gradient(
          to right,
          var(--gray-300) 100%,
          transparent 0%
        )
        bottom;

      background-repeat: no-repeat;
      background-size: 100% 2px;
    `;
  }
};

export const tabsStyles = {
  TabWrapper: styled.div<Pick<TabsProps, "variant">>`
    display: flex;
    margin-bottom: ${pxToRem(20)};

    overflow-x: scroll;

    ::-webkit-scrollbar {
      height: 0;
      width: 0;
    }

    ${getTabsWrapper}
  `,

  TabButton: styled.button<Pick<TabsProps, "variant">>`
    border: none;
    outline: none;
    appearance: none;

    font-size: var(--text-s);
    padding: ${pxToRem(10)} ${pxToRem(15)};

    cursor: pointer;

    ${getVariantStyles}
  `,

  TabContent: styled.div`
    padding-left: ${pxToRem(20)};
  `,
};
