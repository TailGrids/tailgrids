"use client";

import { Label } from "@/registry/core/label";
import { TextArea } from "@/registry/core/text-area";
import { TextField } from "@/registry/core/text-field";

export default function TextAreaRowsPreview() {
  return (
    <div className="w-full max-w-md">
      <TextField>
        <Label>Notes</Label>
        <TextArea
          name="notes"
          rows={8}
          placeholder="Use a taller textarea for longer notes..."
        />
      </TextField>
    </div>
  );
}
