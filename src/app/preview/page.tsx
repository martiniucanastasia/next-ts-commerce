"use client";

//Preview components
import { Input } from "@/components/UI/Input/Input";
import { Button } from "@/components/UI/Buttons/Button";

import ArrowSvg from "../../assets/svg/icon/control/arrow_forward.svg";

export default function Preview() {
  return (
    <div style={{ maxWidth: "300px", margin: "30px" }}>
      <h2>Base Inputs</h2>

      <br />
      <Input placeholder="Type" />

      <br />
      <Input placeholder="Type" isTextarea={true} />

      <br />
      <h2>Input Group</h2>

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

      <br />
      <Input
        placeholder="Type"
        button={
          <Button visual="right" variant="primary" available={false}>
            Agree
          </Button>
        }
      />

      <br />
      <h2>Input with Label</h2>

      <br />
      <Input placeholder="Type" label="Input with Label" />

      <br />
      <Input
        placeholder="Click on me"
        label="Input with Label and Top Hint"
        hintTop="Hint the text top"
      />

      <br />
      <Input
        placeholder="Click on me"
        label="Input with Label and Bottom Hint"
        hintBottom="Hint the text bottom"
      />

      <br />
      <Input placeholder="Type" isTextarea={true} label="Textarea with Label" />
    </div>
  );
}
