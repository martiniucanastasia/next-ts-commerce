"use client";

//Preview components
import { Checkbox } from "@/components/UI/Checkbox/Checkbox";
import { useMemo, useState } from "react";

export default function Preview() {
  // Just for presentation reasons
  const [data, setData] = useState([
    { id: 0, name: "Shoes", checked: false },
    { id: 1, name: "Milk", checked: false },
    { id: 2, name: "Flowers", checked: false },
  ]);

  const handleChange = (id: number) => {
    data[id].checked = !data[id].checked;
    let todosClone = [...data];
    todosClone[id] = data[id];
    setData([...todosClone]);
  };

  return (
    <div style={{ display: "flex" }}>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <Checkbox
              label="Label" // or just remove label
              value={item.name}
              isChecked={item.checked}
              onChange={() => handleChange(item.id)}
            />
          </div>
        );
      })}
    </div>
  );
}
