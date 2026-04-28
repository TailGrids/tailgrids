"use client";

import { Checkbox } from "@/registry/core/checkbox";
import { Label } from "@/registry/core/label";
import { useId } from "react";

export default function CheckboxSizesPreview() {
  return (
    <div className="flex items-center gap-6">
      <SizeItem size="sm" label="Small checkbox" />
      <SizeItem size="md" label="Medium checkbox" />
    </div>
  );
}

function SizeItem({ size, label }: { size: "sm" | "md"; label: string }) {
  const id = useId();

  return (
    <div className="flex items-center gap-3">
      <Checkbox id={id} size={size} defaultChecked />
      <Label htmlFor={id}>{label}</Label>
    </div>
  );
}
