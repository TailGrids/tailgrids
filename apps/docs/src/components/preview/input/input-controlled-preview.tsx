"use client";

import { Input } from "@/registry/core/input";
import { useState } from "react";

export default function InputControlledPreview() {
  const [value, setValue] = useState("");

  return (
    <Input
      label="Controlled Input"
      placeholder="Start typing..."
      value={value}
      onChange={e => setValue(e.target.value)}
      hint={`${value.length} characters`}
    />
  );
}
