"use client";

import { SelectComponent } from "@/components/UI/Select/Select";
import { OptionType } from "@/components/UI/Select/types";
import { useState } from "react";

const options: OptionType<string>[] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function Preview() {
    
  const [selectedOption, setSelectedOption] =
    useState<OptionType<string> | null>(null);

  const handleChange = (option: OptionType<string> | null) => {
    setSelectedOption(option);
  };

  return (
    <div style={{ maxWidth: "300px" }}>
      <SelectComponent
        placeholder="Select"
        options={options}
        onChange={handleChange}
      />
      {/* Delete after review */}
      {selectedOption && <p>You have selected: {selectedOption.label}</p>}
    </div>
  );
}
