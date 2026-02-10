"use client";

import { Input } from "@/registry/core/input";
import { useState } from "react";

export default function InputControlledPreview() {
  const [value, setValue] = useState("");

  return (
    <div className="max-w-sm w-full mx-auto">
      <Input
        label="Controlled Input"
        placeholder="Start typing..."
        value={value}
        onChange={e => setValue(e.target.value)}
        hint={`${value.length} characters`}
      />
    </div>
  );
}
