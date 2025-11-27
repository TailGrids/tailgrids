"use client";

import { Toggle } from "@/registry/core/toggle";
import { useState } from "react";

export default function TogglePreview() {
  const [isNotifications, setIsNotifications] = useState(true);

  return (
    <div className="flex flex-col items-start gap-6 w-full p-4">
      <div className="flex flex-col gap-3">
        <h3 className="text-base font-semibold text-neutral-700">
          Small Size (sm)
        </h3>
        <Toggle label="Email Notifications" size="sm" defaultChecked />
        <Toggle label="Sync Data" size="sm" />
        <Toggle label="Disabled" size="sm" disabled defaultChecked />
      </div>

      <div className="w-full h-px bg-neutral-100" />

      <div className="flex flex-col gap-3">
        <h3 className="text-base font-semibold text-neutral-700">
          Medium Size (md)
        </h3>
        <Toggle label="High Contrast Mode" size="md" defaultChecked />
        <Toggle label="Enable Two-Factor" size="md" />
        <Toggle label="Disabled" size="md" disabled />
      </div>

      <div className="w-full h-px bg-neutral-100" />

      <div className="flex flex-col gap-3">
        <h3 className="text-base font-semibold text-neutral-700">
          Controlled Example
        </h3>
        <Toggle
          label={`Analytics ${isNotifications ? "Enabled" : "Disabled"}`}
          size="md"
          checked={isNotifications}
          onChange={e => setIsNotifications(e.target.checked)}
        />
      </div>
    </div>
  );
}
