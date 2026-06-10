"use client";

import { Description } from "@/registry/core/description";
import { Input } from "@/registry/core/input";
import { Label } from "@/registry/core/label";
import { TextField } from "@/registry/core/text-field";

export default function InputStatesPreview() {
  return (
    <div className="max-w-sm w-full mx-auto flex flex-col gap-6">
      <TextField className="grid gap-2">
        <Label>Email</Label>
        <Input state="success" placeholder="email@example.com" />
        <Description className="text-sm text-input-success">
          Email is valid
        </Description>
      </TextField>

      <TextField className="grid gap-2">
        <Label>Email</Label>
        <Input state="error" placeholder="email@example.com" />
        <Description className="text-sm text-input-error">
          Please enter a valid email address
        </Description>
      </TextField>
    </div>
  );
}
