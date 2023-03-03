"use client";

import { GlobalStyles } from "@/styles/global";
import { Button } from "@/components/UI/Buttons/Button";

export default function Page() {
  return (
    <div>
      <GlobalStyles />
      <Button variant="primary" size="large">
        Hello
      </Button>
      <Button variant="secondary" size="base">
        Hello
      </Button>
      <Button variant="tertiary" size="small">
        Hello
      </Button>
    </div>
  );
}
