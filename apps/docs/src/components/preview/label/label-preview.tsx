"use client";

import { Input } from "@/registry/core/input";
import { Label } from "@/registry/core/label";
import { TextField } from "@/registry/core/text-field";

export default function LabelPreview() {
  return (
    <TextField className="w-sm">
      <Label htmlFor="email">Email Address:</Label>
      <Input
        id="email"
        type="email"
        placeholder="Enter your email"
        className="w-full"
      />
    </TextField>
  );
}
