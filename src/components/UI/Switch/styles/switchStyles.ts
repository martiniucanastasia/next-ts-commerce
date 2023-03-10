import styled from "styled-components";
import { pxToRem } from "@/styles/_common";

export const SwitchButton = styled.div`
  content: "";
  position: absolute;

  top: ${pxToRem(7)};
  left: ${pxToRem(2)};
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
  border-radius: ${pxToRem(50)};

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  background: white;
  transition: all 0.2s ease;

  cursor: pointer;
`;

export const Switch = {
  Label: styled.label`
    display: inline-flex;
    align-items: center;
    position: relative;

    padding: ${pxToRem(5)} 0;
  `,
  SwitchWrapper: styled.form`
    padding-right: ${pxToRem(10)};
    height: ${pxToRem(25)};
  `,
  Input: styled.input`
    appearance: none;
    margin: 0;

    width: ${pxToRem(48)};
    height: ${pxToRem(25)};
    border-radius: ${pxToRem(125)};
    background-color: var(--gray);
    transition: opacity 0.2s ease, transform 0.2s ease,
      background-color 0.2s ease;

    cursor: pointer;

    &:checked {
      background-color: var(--primary);
    }

    &:checked + ${SwitchButton} {
      left: ${pxToRem(26)};
    }
  `,
  SwitchName: styled.p`
    font-size: var(--text-s);
    color: var(--gray-800);

    cursor: pointer;
  `,
};
