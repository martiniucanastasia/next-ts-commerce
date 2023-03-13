"use client";

//Preview components
import { Switch } from "@/components/UI/Switch/Switch";
import { useState } from "react";

export default function Preview() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <Switch isChecked={isChecked} setIsChecked={setIsChecked} label="Switch label"/>
    </>
  );
}
