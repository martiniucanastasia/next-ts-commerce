import { pxToRem } from "@/styles/_common";
import { device } from "@/styles/_sizes";
import styled from "styled-components";

export const StyledBurger = styled.button<{ open: boolean }>`
  position: absolute;
  top: 40%;
  left: ${pxToRem(10)};

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: ${pxToRem(18)};
  height: ${pxToRem(12)};
  padding: 0;

  background: transparent;
  border: none;
  z-index: 11;
  cursor: pointer;

  div {
    width: ${pxToRem(18)};
    height: ${pxToRem(2)};
    background: var(--gray-700);

    transition: all 0.3s linear;
    position: relative;
    transform-origin: ${pxToRem(1)};
    display: none;

    @media ${device.mobile} {
      display: block;
    }

    :first-child {
      transform: ${({ open }) => (open ? "rotate(30deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-30deg)" : "rotate(0)")};
    }
  }
`;
export const StyledMenu = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;


  transform: ${({ open }: { open: boolean }) =>
    open ? "translateX(0)" : "translateX(-200%)"};

  background: var(--primary-100);
  border-color: white;
  border-style: solid;
  border-width: ${pxToRem(20)} ${pxToRem(20)} ${pxToRem(20)} 0;
  opacity: 0.9;

  width: 30%;
  height: 100vh;

  top: 0;
  left: 0;
  z-index: 10;
`;
