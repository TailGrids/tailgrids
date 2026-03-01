"use client";

import { RadioGroup, RadioGroupItem } from "@/registry/core/radio-group";
import { useState } from "react";

export function RadioGroupHorizontalPreview() {
  const [value, setValue] = useState("standard");

  return (
    <RadioGroup
      value={value}
      onChange={setValue}
      orientation="horizontal"
      spacing="lg"
      className="flex flex-wrap"
    >
      <RadioGroupItem value="compact">Compact</RadioGroupItem>
      <RadioGroupItem value="standard">Standard</RadioGroupItem>
      <RadioGroupItem value="comfortable">Comfortable</RadioGroupItem>
    </RadioGroup>
  );
}
