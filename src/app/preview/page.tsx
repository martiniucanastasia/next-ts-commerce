"use client";

import { Button } from "@/components/UI/Buttons/Button";
//Preview components
import { Input } from "@/components/UI/Input/Input";

import ArrowSvg from "../../assets/svg/icon/control/arrow_forward.svg";

export default function Preview() {
  return (
    <div style={{ maxWidth: "300px", margin: "30px" }}>
      <br />
      <Input placeholder="Type" />
      <br />
      <Input placeholder="Type" isTextarea={true} />

      {/* Group Inputs */}
      <br />
      <Input
        placeholder="Type"
        button={
          <Button visual="right" variant="fifth">
            Hello
          </Button>
        }
      />
      <br />
      <Input
        placeholder="Type"
        button={
          <Button visual="right" variant="quaternary">
            <ArrowSvg />
          </Button>
        }
      />

      {/* Labels and Hints */}
      <br />
      <Input placeholder="Type" label="Input with Label" />
      <br />
      <Input
        placeholder="Type"
        label="Input with Label and Top Hint"
        hintTop="Hint the text top"
      />
      <br />
      <Input
        placeholder="Type"
        label="Input with Label and Bottom Hint"
        hintBottom="Hint the text bottom"
      />
    </div>
  );
}
