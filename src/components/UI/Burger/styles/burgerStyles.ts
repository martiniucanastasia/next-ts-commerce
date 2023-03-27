import styled from "styled-components";
import Link from "next/link";
import { pxToRem } from "@/styles/_common";
import { device } from "@/styles/_sizes";
import { SelectComponent } from "../../Select/Select";

export const StyledBurger = styled.button<{ open: boolean }>`
  position: absolute;

  top: ${pxToRem(20)};
  left: ${pxToRem(22)};

  display: flex;
  flex-direction: column;
  justify-content: space-around;

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
  MenuWrapper: styled.div`
    position: absolute;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    display: ${({ open }: { open: boolean }) => (open ? "block" : "none")};

    background: white;

    width: 40%;
    height: 100vh;

    top: 0;
    left: 0;
    z-index: 10;

    color: black;

    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

    @media ${device.mobileS} {
      width: 50%;
    }

    @media ${device.mobileXS} {
      width: 80%;
    }
  `,

  UserLogInWrapper: styled.div`
    display: flex;
    flex-direction: column;

    padding: ${pxToRem(20)};

    background-color: var(--gray-200);
    height: ${pxToRem(113)};
  `,

  LinksWrapper: styled.div`
    display: flex;

    margin-top: ${pxToRem(10)};
    gap: ${pxToRem(5)};
  `,

  OptionsWrapper: styled.div`
    padding: 20px;
  `,

  GeneralOptionsList: styled.ul`
    display: flex;
    flex-direction: column;

    border-bottom: 1px solid var(--gray-300);

    padding-bottom: 20px;
  `,
  OptionLink: styled.li`
    :not(:first-child) {
      padding-top: ${pxToRem(30)};
    }
  `,
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

    padding-top: ${pxToRem(20)};
    gap: ${pxToRem(16)};

    svg path {
      fill: var(--gray-500);
    }
  `,
  BurgerSelect: styled(SelectComponent)`
    & .Select__control {
      border: none;
    }

    & .Select__value-container {
      padding: 0;
    }

    & .Select__indicator {
      display: none;
    }
  `,

  InfoWrapper: styled.ul`
    padding: ${pxToRem(20)} ${pxToRem(20)} ${pxToRem(20)} ${pxToRem(55)};
  `,
};
