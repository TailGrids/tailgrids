"use client";

import {
  FieldDescription,
  FieldError,
  FieldLabel
} from "@/registry/core/field";
import { TextArea } from "@/registry/core/text-area";
import { TextField } from "@/registry/core/text-field";

export default function FieldWithTextareaPreview() {
  return (
    <div className="flex flex-col items-center gap-10 w-full max-w-sm p-4">
      <TextField className="w-full">
        <FieldLabel htmlFor="bio">Bio</FieldLabel>
        <TextArea id="bio" placeholder="Tell us about yourself..." />
        <FieldDescription>
          Brief description for your profile. Maximum 280 characters.
        </FieldDescription>
        <FieldError>Bio must be between 5 and 280 characters.</FieldError>
      </TextField>
    </div>
  );
}
