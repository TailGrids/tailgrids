"use client";

import { RadioInput } from "@/registry/core/radio-input";
import { useState } from "react";

export default function RadioControlledPreview() {
  const [selected, setSelected] = useState("option1");

  return (
    <div className="flex flex-col gap-3">
      <RadioInput
        name="controlled"
        label="Option 1"
        value="option1"
        checked={selected === "option1"}
        onChange={e => setSelected(e.target.value)}
      />
      <RadioInput
        name="controlled"
        label="Option 2"
        value="option2"
        checked={selected === "option2"}
        onChange={e => setSelected(e.target.value)}
      />
      <RadioInput
        name="controlled"
        label="Option 3"
        value="option3"
        checked={selected === "option3"}
        onChange={e => setSelected(e.target.value)}
      />
    </div>
  );
}
