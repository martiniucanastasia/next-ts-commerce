"use client";

import { useOutsideClick } from "@/hooks/useOutsideClick";
import { Dispatch, SetStateAction, useState } from "react";
import { StyledBurger, StyledMenu } from "./burgerStyles";

interface BurgerProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const Burger = () => {
  const [open, setOpen] = useState<boolean>(false);

  const BurgerBase = ({ open, setOpen }: BurgerProps) => {
    return (
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    );
  };

  const BugerMenu = ({ open, setOpen }: BurgerProps) => {
    const handleClickOutside = () => setOpen(false);
    const ref = useOutsideClick(handleClickOutside);
    return <StyledMenu ref={ref} open={open}>Hello!</StyledMenu>
  };
  return (
    <>
      <BurgerBase open={open} setOpen={setOpen} />
      <BugerMenu open={open} setOpen={setOpen} />
    </>
  );
};
