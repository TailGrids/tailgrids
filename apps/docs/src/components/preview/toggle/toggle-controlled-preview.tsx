"use client";

import { Toggle } from "@/registry/core/toggle";
import React from "react";

export default function ToggleControlledPreview() {
  const [isDark, setIsDark] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDark(e.target.checked);
  };

  return (
    <div className="flex items-center gap-4">
      <Toggle
        label="Dark Mode"
        checked={isDark}
        onChange={handleChange}
        size="md"
      />
    </div>
  );
}
