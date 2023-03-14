"use client";

//Preview components
import { Radiobox } from "@/components/UI/Radiobox/Radiobox";
import { useState } from "react";

const colors = [
  {
    id: 0,
    name: "bloody_red",
    label: "Bloody red",
    checked: false,
  },
  {
    id: 1,
    name: "greeny_forest",
    label: "Greeny forest",
    checked: false,
  },
  {
    id: 2,
    name: "sky_blue",
    label: "Sky blue",
    checked: false,
  },
];

export default function Preview() {
  const [color, setColor] = useState<string | undefined>();

  const handleChange = (value: string) => {
    setColor(value);
  };

  return (
    <div style={{ display: "flex" }}>
      {colors.map((item) => {
        return (
          <div key={item.id}>
            <Radiobox
              groupLabel="Label"
              label={item.label}
              isChecked={color === item.label}
              onChange={handleChange}
            />
          </div>  
        );
      })}
    </div>
  );
}
