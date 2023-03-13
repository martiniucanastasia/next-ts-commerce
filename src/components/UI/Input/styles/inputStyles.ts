import styled from "styled-components";
import { pxToRem } from "@/styles/_common";

export const inputStyles = {
  InputWrapper: styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
  `,
  Input: styled.input`
    display: block;
    overflow: hidden;
    width: 100%;
    min-height: ${pxToRem(40)};
    padding: ${pxToRem(10)};

    border-radius: ${pxToRem(6)};
    border: 1px solid var(--gray-300);

    ::placeholder {
      color: var(--gray-500);
    }

    :focus {
      outline-color: var(--primary);
    }
  `,
  Textarea: styled.textarea`
    display: block;
    overflow: hidden;

    width: 100%;
    max-height: ${pxToRem(75)};
    padding: ${pxToRem(10)};

    border-radius: ${pxToRem(6)};
    border: 1px solid var(--gray-300);

    :focus {
      outline-color: var(--primary);
    }

    ::placeholder {
      color: var(--gray-500);
      font-family: var(--font-primary);
    }

    ::-webkit-resizer {
      border-width: ${pxToRem(8)};
      border-bottom-right-radius: ${pxToRem(5)};
      border-style: solid;
      border-color: transparent var(--gray-300) var(--gray-300) transparent;

      cursor: s-resize;
    }
  `,

  ButtonWrapper: styled.div`
    position: absolute;
    left: 98%;
  `,

  Label: styled.p`
    padding-bottom: ${pxToRem(5)};
    font-size: var(--text-s);
    color: var(--gray-800);
  `,
  Hint: styled.span`
    font-size: var(--text-xxs);
    color: var(--warning);
    padding: ${pxToRem(2)};
  `,
};
