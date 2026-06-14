"use client";

import { FieldDescription, FieldLabel } from "@/registry/core/field";
import { Input } from "@/registry/core/input";
import { TextField } from "@/registry/core/text-field";

export default function FieldPreview() {
  return (
    <div className="flex flex-col items-center gap-10 w-full max-w-sm p-4">
      <TextField className="w-full">
        <FieldLabel htmlFor="email">Email address</FieldLabel>
        <Input id="email" type="email" placeholder="you@example.com" />
        <FieldDescription>We&apos;ll never share your email.</FieldDescription>
      </TextField>
    </div>
  );
}
