"use client";

import { Description } from "@/registry/core/description";
import { Input } from "@/registry/core/input";
import { Label } from "@/registry/core/label";
import { TextField } from "@/registry/core/text-field";
import { useState } from "react";

export default function TextFieldPreview() {
  const [value, setValue] = useState("");

  return (
    <TextField value={value} onChange={setValue}>
      <Label>Full name</Label>
      <Input placeholder="Enter your full name" />
      <Description>Use your legal name as it appears on your ID.</Description>
    </TextField>
  );
}
