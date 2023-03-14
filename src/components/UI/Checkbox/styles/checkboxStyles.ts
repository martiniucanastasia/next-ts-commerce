import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
  ThemedStyledProps,
} from "styled-components";
import { pxToRem } from "@/styles/_common";
import { CheckboxProps } from "../Checkbox";

const getCheckedColor = ({
  isChecked = false,
}: ThemedStyledProps<Pick<CheckboxProps, "isChecked">, DefaultTheme>) => {
  const mapper: Record<string, FlattenSimpleInterpolation> = {
    true: css`
      background-color: var(--primary);
      border-radius: ${pxToRem(5)};
    `,
    false: css`
      border: 2px solid var(--gray-400);
      svg path {
        visibility: hidden;
      }
    `,
  };
  return mapper[`${isChecked}`];
};

export const checkboxStyles = {
  Label: styled.label`
    display: inline-flex;
    position: relative;
    align-items: center;
    user-select: none;
    font-family: var(--font-primary);
    color: var(--gray-700);
    font-size: var(--text-s);

    cursor: pointer;
  `,
  Input: styled.input`
    margin-right: 15px;
    opacity: 0;
  `,
};

export const checkboxStylesMask = {
  CheckboxMask: styled.div<{ isChecked: boolean }>(
    ({ isChecked }) => css`
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${pxToRem(20)};
      height: ${pxToRem(20)};
      padding: ${pxToRem(5)} ${pxToRem(3)};
      border-radius: ${pxToRem(5)};

      ${getCheckedColor}
    `
  ),
};
