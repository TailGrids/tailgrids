"use client";

import { Description } from "@/registry/core/description";
import { Input } from "@/registry/core/input";
import { Label } from "@/registry/core/label";
import { TextField } from "@/registry/core/text-field";

export default function DescriptionPreview() {
  return (
    <TextField className="max-w-sm w-full mx-auto grid gap-2">
      <Label>Email</Label>
      <Input placeholder="Enter your email" />
      <Description>
        We will never share your email with anyone else.
      </Description>
    </TextField>
  );
}
