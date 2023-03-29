import styled from "styled-components";
import { pxToRem } from "@/styles/_common";
import { Button } from "../../Buttons/Button";

export const PaginationLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${pxToRem(44)};
  height: ${pxToRem(40)};

  font-size: var(--text-s);
  border: 1px solid var(--gray-300);
  border-width: ${pxToRem(1)} ${pxToRem(0.5)} ${pxToRem(1)} ${pxToRem(0.5)};
  color: var(--primary);
  background-color: ${({ isActive }: { isActive: boolean }) =>
    isActive ? "var(--gray-300)" : "white"};

  cursor: pointer;
`;

export const paginationStyled = {
  PaginationWrapper: styled.div`
    display: flex;
    align-items: center;
    list-style: none;
  `,

  SelectWrapper: styled.div`
    padding-right: ${pxToRem(10)};
  `,

  Button: styled(Button)`
    width: ${pxToRem(38)};
    height: ${pxToRem(40)};

    svg {
      width: ${pxToRem(24)};
      height: ${pxToRem(24)};

      path {
        fill: ${({ disabled }: { disabled: boolean }) =>
          disabled && "var(--gray-400)"};
      }
    }
  `,
};
