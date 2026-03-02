"use client";

import { Label } from "@/registry/core/label";
import { RadioInput } from "@/registry/core/radio-input";
import { useState } from "react";

export default function RadioControlledPreview() {
  const [selected, setSelected] = useState("option1");

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
  ];

  return (
    <div className="flex flex-col gap-3">
      {options.map(option => (
        <Label
          key={option.value}
          className="group flex cursor-pointer items-center gap-3 select-none"
        >
          <RadioInput
            name="controlled"
            value={option.value}
            checked={selected === option.value}
            onChange={e => setSelected(e.target.value)}
          />
          <span>{option.label}</span>
        </Label>
      ))}
    </div>
  );
}
