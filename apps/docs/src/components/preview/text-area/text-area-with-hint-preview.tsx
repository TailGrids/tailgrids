"use client";

import { Description } from "@/registry/core/description";
import { Label } from "@/registry/core/label";
import { TextArea } from "@/registry/core/text-area";
import { TextField } from "@/registry/core/text-field";

export default function TextAreaWithHintPreview() {
  return (
    <div className="w-full max-w-md">
      <TextField>
        <Label>Bio</Label>
        <TextArea placeholder="Your bio..." />
        <Description className="text-sm text-text-50">
          Tell us a little about yourself.
        </Description>
      </TextField>
    </div>
  );
}
