"use client";

import { GlobalStyles } from "@/styles/global";

//Preview components
import { Button } from "../../components/UI/Buttons/Button";
import { IconButton } from "../../components/UI/Buttons/IconButton";

import TestRight from "../../assets/svg/icon/control/arrow_back.svg";
import TestLeft from "../../assets/svg/icon/control/arrow_forward.svg";
import TestHeart from "../../assets/svg/icon/control/favorite_border.svg";

export default function Preview() {
  return (
    <>
      <GlobalStyles />

      <br />
      <Button size="large" variant="primary">
        <TestRight />
        Hello
      </Button>
      <br />
      <Button size="normal" variant="secondary">
        Hello
        <TestLeft />
      </Button>
      <br />
      <Button size="small" variant="tertiary">
        <TestRight />
        Hello
      </Button>
      <br />

      <br />
      <Button size="normal" variant="quaternary">
        Hello
      </Button>
      <br />
      <Button size="small" variant="fifth">
        Hello
      </Button>
      <br />

      <br />
      <IconButton size="large" variant="primary">
        <TestHeart />
      </IconButton>
      <br />
      <IconButton size="normal" variant="secondary">
        <TestHeart />
      </IconButton>
      <br />
      <IconButton size="small" variant="tertiary">
        <TestHeart />
      </IconButton>
      <br />
    </>
  );
}
