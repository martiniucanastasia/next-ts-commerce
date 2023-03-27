import styled from "styled-components";
import Link from "next/link";
import { pxToRem } from "@/styles/_common";
import { device } from "@/styles/_sizes";
import { SelectComponent } from "../../Select/Select";

export const StyledBurger = styled.button<{ open: boolean }>`
  position: absolute;

  top: ${pxToRem(20)};
  left: ${pxToRem(22)};

  padding: 0;

  background: transparent;
  border: none;
  z-index: 11;
  cursor: pointer;

  display: none;

  @media ${device.mobile} {
    display: ${({ open }: { open: boolean }) => (open ? "none" : "block")};
  }
`;
export const StyledMenu = {
  BurgerMenuWrapper: styled.div<{ open: boolean }>`
    display: ${({ open }: { open: boolean }) => (open ? "block" : "none")};
    background: var(--primary);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(231, 231, 231, 0.3) 22.39%,
      rgba(209, 209, 209, 0.3) 42.6%,
      rgba(182, 182, 182, 0.3) 79.19%,
      rgba(156, 156, 156, 0.3) 107.86%
    );

    opacity: 0.8;
    position: fixed;
    z-index: 2;

    width: 100%;
    height: 100%;

    cursor: pointer;
  `,
  
  MenuWrapper: styled.div`
    position: absolute;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    display: ${({ open }: { open: boolean }) => (open ? "block" : "none")};

    background: white;

    width: 40%;
    height: 100vh;

    top: 0;
    left: 0;
    z-index: 10;

    color: black;

    float: left;
    overflow-y: auto;

    @media ${device.mobileS} {
      width: 50%;
    }

    @media ${device.mobileXS} {
      width: 80%;
    }
  `,

  UserLogInWrapper: styled.div`
    width: 100%;
    padding: ${pxToRem(20)};

    background-color: var(--gray-200);
  `,

  LinksWrapper: styled.div`
    display: flex;

    margin-top: ${pxToRem(10)};
    gap: ${pxToRem(5)};
  `,

  OptionsWrapper: styled.div`
    display: flex;
    flex-direction: column;

    gap: ${pxToRem(25)};
    padding: ${pxToRem(20)};
  `,

  GeneralOptionsList: styled.ul`
    display: flex;
    flex-direction: column;

    border-bottom: 1px solid var(--gray-300);

    padding-bottom: ${pxToRem(25)};
    gap: ${pxToRem(20)};
  `,

  OptionLink: styled.li``,

  Link: styled(Link)`
    display: flex;
    gap: ${pxToRem(18)};

    svg path {
      fill: var(--gray-500);
    }
  `,

  BurgerSelectWrapper: styled.li`
    display: flex;
    align-items: center;

    gap: ${pxToRem(16)};
  `,

  BurgerSelect: styled(SelectComponent)`
    & .Select__control {
      border: none;
    }

    & .Select__value-container {
      padding: 0;
    }
  `,

  InfoWrapper: styled.ul`
    display: flex;
    flex-direction: column;

    padding: 0 ${pxToRem(20)} ${pxToRem(20)} ${pxToRem(55)};
    gap: ${pxToRem(30)};
  `,
};
