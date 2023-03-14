"use client";

//Preview components
import { Checkbox } from "@/components/UI/Checkbox/Checkbox";
import { useState } from "react";

export default function Preview() {
  const [isChecked, setIsChecked] = useState(false);

  const data = [
    {
      id: 0,
      name: "Jane",
    },
    {
      id: 1,
      name: "James",
    },
    {
      id: 2,
      name: "Alexa",
    },
    {
      id: 3,
      name: "Jane",
    },
  ];

  const handleChange = (): void => {
    setIsChecked(!isChecked);
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {data.map((item) => {
        return (
          <Checkbox
            key={item.id}
            value={item}
            isChecked={isChecked}
            onChange={handleChange}
          />
        );
      })}
    </div>
  );
}
