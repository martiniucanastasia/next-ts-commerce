import styled from "styled-components";
import { pxToRem } from "@/styles/_common";
import { CheckboxProps } from "../Checkbox";

export const CheckboxMask = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${pxToRem(20)};
  height: ${pxToRem(20)};

  margin: 0 ${pxToRem(13)} 0 0;
  border-radius: ${pxToRem(5)};

  border: 2px solid var(--gray-400);
`;

export const checkboxStyles = {
  CheckboxLabel: styled.p<Pick<CheckboxProps, "groupLabel">>`
    font-size: var(--text-s);
    color: var(--gray-700);
  `,
  CheckboxWrapper: styled.div`
    padding: ${pxToRem(8)} ${pxToRem(15)} ${pxToRem(8)} 0;
  `,
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
  Checkbox: styled.input.attrs({ type: "checkbox" })`
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};

    margin: 0 ${pxToRem(13)} 0 0;
    opacity: 0;

    &:checked + ${CheckboxMask} {
      background-color: var(--primary);
      border: 2px solid var(--primary);
    }
  `,
  CheckboxMask,
};
