import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
  ThemedStyledProps,
} from "styled-components";
import { pxToRem } from "@/styles/_common";
import { InputProps } from "../types";

export const getGroupStyles = ({
  visual = "",
}: ThemedStyledProps<Pick<InputProps, "visual">, DefaultTheme>) => {
  const mapper: Record<string, FlattenSimpleInterpolation> = {
    right: css`
      border-top-right-radius: ${pxToRem(8)};
      border-bottom-right-radius: ${pxToRem(8)};
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    `,
    center: css`
      border-radius: 0;
    `,
    left: css`
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-top-left-radius: ${pxToRem(8)};
      border-bottom-left-radius: ${pxToRem(8)};
    `,
  };

  return mapper[visual];
};

export const inputStyles = {
  InputWrapper: styled.div`
    display: flex;
  `,
  GeneralWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  Input: styled.input<Pick<InputProps, "visual">>`
    display: block;
    overflow: hidden;
    width: 100%;
    min-height: ${pxToRem(40)};
    padding: ${pxToRem(10)};

    border-radius: ${pxToRem(6)};
    border: 1px solid var(--gray-300);
    font-size: var(--text-s);
    outline: none;

    ::placeholder {
      color: var(--gray-500);
      font-size: var(--text-s);
    }

    :focus {
      border-color: var(--primary);
    }

    ${getGroupStyles}
  `,
  Textarea: styled.textarea`
    display: block;
    overflow: hidden;

    width: 100%;
    padding: ${pxToRem(10)};

    border-radius: ${pxToRem(6)};
    border: 1px solid var(--gray-300);
    font-size: var(--text-s);

    resize: vertical;
    :focus {
      border-color: var(--primary);
    }

    ::placeholder {
      color: var(--gray-500);
      font-family: var(--font-primary);
      font-size: var(--text-s);
    }

    ::-webkit-resizer {
      border-width: ${pxToRem(8)};
      border-bottom-right-radius: ${pxToRem(5)};
      border-style: solid;
      border-color: transparent var(--gray-300) var(--gray-300) transparent;

      cursor: s-resize;
    }
  `,

  Label: styled.p`
    padding-bottom: ${pxToRem(5)};
    font-size: var(--text-s);
    color: var(--gray-800);
  `,
  Hint: styled.span`
    font-size: var(--text-xxs);
    color: var(--warning);
  `,
};
