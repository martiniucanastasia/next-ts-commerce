"use client";

import { GlobalStyles } from "@/styles/global";
import { Button } from "@/components/UI/Buttons/Button";
import TestPic from "@/assets/svg/icon/general/0.svg";

export default function Preview() {
  return (
    <div>
      <GlobalStyles />
      {/* Primary buttons */}
      <Button variant="primary" size="large">
        <TestPic />
        Primary
      </Button>
      <br />
      <Button variant="primary" size="normal">
        Primary
        <TestPic />
      </Button>
      <br />
      <Button variant="primary" size="small">
        Primary
      </Button>
      <br />
      <Button variant="primary" size="small">
        <TestPic />
      </Button>
      {/* Secondary buttons */}
      <br />
      <Button variant="secondary" size="large">
        <TestPic />
        Secondary
      </Button>
      <br />
      <Button variant="secondary" size="normal">
        Secondary
        <TestPic />
      </Button>
      <br />
      <Button variant="secondary" size="small">
        Secondary
      </Button>
      <br />
      <Button variant="secondary" size="small">
        <TestPic />
      </Button>
      {/* Tertiary buttons */}
      <br />
      <Button variant="tertiary" size="large">
        <TestPic />
        Tertiary
      </Button>
      <br />
      <Button variant="tertiary" size="normal">
        Tertiary
        <TestPic />
      </Button>
      <br />
      <Button variant="tertiary" size="small">
        Tertiary
      </Button>
      <br />
      <Button variant="tertiary" size="small">
        <TestPic />
      </Button>
    </div>
  );
}
