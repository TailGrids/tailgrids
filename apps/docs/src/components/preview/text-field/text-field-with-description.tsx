"use client";

import { Description } from "@/registry/core/description";
import { FieldError } from "@/registry/core/field";
import { Input } from "@/registry/core/input";
import { Label } from "@/registry/core/label";
import { TextField } from "@/registry/core/text-field";

export default function TextFieldWithDescription() {
  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <TextField>
        <Label>Email</Label>
        <Input type="email" placeholder="you@example.com" />
        <Description>
          We&apos;ll never share your email with anyone.
        </Description>
        <FieldError>Please enter a valid email address.</FieldError>
      </TextField>
    </div>
  );
}
