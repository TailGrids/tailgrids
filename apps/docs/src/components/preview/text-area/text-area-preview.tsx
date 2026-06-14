"use client";

import { TextArea } from "@/registry/core/text-area";
import { TextField } from "@/registry/core/text-field";

export default function TextAreaPreview() {
  return (
    <TextField className="w-full max-w-md">
      <TextArea name="text-area" placeholder="Write something..." />
    </TextField>
  );
}
