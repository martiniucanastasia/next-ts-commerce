import { pxToRem } from "@/styles/_common";
import styled from "styled-components";

const RadioMask = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${pxToRem(18)};
  height: ${pxToRem(18)};

  border-radius: ${pxToRem(50)};
  border: 2px solid var(--gray-400);
`;

const GroupLabel = styled.label`
  display: inline-flex;
  position: relative;
  align-items: center;
  user-select: none;

  font-family: var(--font-primary);
  color: var(--gray-700);
  font-size: var(--text-s);

  cursor: pointer;
`;

export const radioboxStyles = {
  RadioLabel: styled.p`
    font-size: var(--text-s);
    color: var(--gray-700);
  `,
  RadioWrapper: styled.form`
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
  Radio: styled.input.attrs({ type: "radio" })`
    appearance: none;

    width: ${pxToRem(18)};
    height: ${pxToRem(18)};

    border-radius: ${pxToRem(50)};
    transform: translateY(-0.075em);
    
    margin: 0 ${pxToRem(15)} 0 0;

    &:checked + ${RadioMask} {
      background-color: var(--primary);
      box-shadow: 0 0 0 2px var(--primary);
      border: 2px solid white;
    }
  `,
  RadioMask,
  GroupLabel,
};
