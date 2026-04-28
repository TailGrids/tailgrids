"use client";

import { Checkbox } from "@/registry/core/checkbox";
import { Label } from "@/registry/core/label";
import { useId } from "react";

export default function CheckboxWithLabelPreview() {
  const id = useId();

  return (
    <div className="flex items-center gap-3">
      <Checkbox id={id} defaultChecked />
      <Label htmlFor={id}>Remember Me</Label>
    </div>
  );
}
