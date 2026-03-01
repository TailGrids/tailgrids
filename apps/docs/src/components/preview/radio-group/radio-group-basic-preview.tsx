"use client";

import { RadioGroup, RadioGroupItem } from "@/registry/core/radio-group";
import { useState } from "react";

export function RadioGroupBasicPreview() {
  const [value, setValue] = useState("option-one");

  return (
    <RadioGroup value={value} onChange={setValue}>
      <RadioGroupItem value="option-one">Default Option</RadioGroupItem>
      <RadioGroupItem value="option-two">Second Choice</RadioGroupItem>
      <RadioGroupItem value="option-three">Third Selection</RadioGroupItem>
    </RadioGroup>
  );
}
