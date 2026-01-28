"use client";

import { Checkbox } from "@/registry/core/checkbox";
import { useState } from "react";

export default function CheckboxControlledPreview() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      label="Subscribe to newsletter"
      checked={checked}
      onChange={e => setChecked(e.target.checked)}
    />
  );
}
