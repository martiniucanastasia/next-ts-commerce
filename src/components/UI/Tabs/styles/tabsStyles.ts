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
  // only one resolution which I found - "FlattenInterpolation<any>" and for css "<{ disabled: boolean }>" to make it without error
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
    `,
  };

  return mapper[variant];
};

export const tabsStyles = {
  TabWrapper: styled.div`
    display: flex;
    flex-direction: row;
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
  
  TabContent: styled.div``,
};
