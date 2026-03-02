"use client";

import { Label } from "@/registry/core/label";
import { RadioInput } from "@/registry/core/radio-input";

export default function RadioPreview() {
  const options = [
    { name: "plan", label: "Basic Plan", value: "basic" },
    { name: "plan", label: "Pro Plan", value: "pro" },
    { name: "plan", label: "Enterprise Plan", value: "enterprise" }
  ];

  return (
    <div className="flex flex-col gap-3">
      {options.map(option => (
        <Label
          key={option.value}
          className="group flex cursor-pointer items-center gap-3 select-none"
        >
          <RadioInput name={option.name} value={option.value} />
          <span>{option.label}</span>
        </Label>
      ))}
    </div>
  );
}
