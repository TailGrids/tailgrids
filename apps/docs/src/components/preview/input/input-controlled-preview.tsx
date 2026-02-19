"use client";

import { Input } from "@/registry/core/input";
import { Label } from "@/registry/core/label";
import { useId, useState } from "react";

export default function InputControlledPreview() {
  const [value, setValue] = useState("");
  const id = useId();

  return (
    <div className="max-w-sm w-full mx-auto grid gap-2">
      <Label htmlFor={id}>Controlled Input</Label>
      <Input
        id={id}
        placeholder="Start typing..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <p className="text-sm text-text-50">{value.length} characters</p>
    </div>
  );
}
