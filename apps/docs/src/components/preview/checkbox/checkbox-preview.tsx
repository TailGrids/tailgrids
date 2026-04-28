"use client";

import { Checkbox } from "@/registry/core/checkbox";
import { Label } from "@/registry/core/label";
import { useId } from "react";

export default function CheckboxPreview() {
  const id = useId();

  return (
    <div className="flex items-center gap-3">
      <Checkbox id={id} size="md" />
      <Label htmlFor={id}>Checkbox</Label>
    </div>
  );
}
