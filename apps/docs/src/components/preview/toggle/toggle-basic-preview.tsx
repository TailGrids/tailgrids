"use client";

import { Toggle } from "@/registry/core/toggle";

export default function ToggleBasicPreview() {
  return (
    <div className="flex items-center gap-4">
      <Toggle label="Enable Feature X" defaultChecked />
    </div>
  );
}
