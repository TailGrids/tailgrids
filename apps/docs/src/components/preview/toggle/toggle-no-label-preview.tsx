"use client";

import { Toggle } from "@/registry/core/toggle";

export default function ToggleNoLabelPreview() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-8">
        <div className="flex flex-col gap-3">
          <span className="text-sm font-medium text-neutral-500">
            With Label
          </span>
          <Toggle label="Dark Mode" size="md" defaultChecked />
        </div>
        <div className="w-px h-12 bg-neutral-200" />
        <div className="flex flex-col gap-3">
          <span className="text-sm font-medium text-neutral-500">
            Without Label
          </span>
          <Toggle aria-label="Dark Mode Toggle" size="md" defaultChecked />
        </div>
      </div>
    </div>
  );
}
