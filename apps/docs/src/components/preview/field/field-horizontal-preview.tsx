"use client";

import { FieldLabel } from "@/registry/core/field";
import { Input } from "@/registry/core/input";
import { TextField } from "@/registry/core/text-field";

export default function FieldHorizontalPreview() {
  return (
    <div>
      <TextField className="w-full" orientation="horizontal">
        <FieldLabel htmlFor="company">Company:</FieldLabel>
        <Input id="company" placeholder="Pimjo" />
      </TextField>
    </div>
  );
}
