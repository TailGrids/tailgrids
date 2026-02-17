"use client";

import {
  Select,
  SelectContent,
  SelectIndicator,
  SelectItem,
  SelectLabel,
  SelectTrigger
} from "@/registry/core/select";
import { useState } from "react";
import type { Key } from "react-aria-components";

export default function SelectControlledMultiplePreview() {
  const [selected, setSelected] = useState<Key[]>(["react"]);

  const selectedLabels = Array.from(selected).map(key => {
    const labels: Record<string, string> = {
      react: "React",
      vue: "Vue",
      angular: "Angular",
      svelte: "Svelte",
      nextjs: "Next.js"
    };
    return labels[key as string] || key;
  });

  return (
    <div className="flex w-full max-w-64 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Select
          selectionMode="multiple"
          value={selected}
          onChange={setSelected}
        >
          <SelectLabel>Programming Frameworks</SelectLabel>
          <SelectTrigger>
            <span className="truncate">
              {selected.length === 0
                ? "Select frameworks"
                : selectedLabels.join(", ")}
            </span>
            <SelectIndicator />
          </SelectTrigger>
          <SelectContent>
            <SelectItem id="react">React</SelectItem>
            <SelectItem id="vue">Vue</SelectItem>
            <SelectItem id="angular">Angular</SelectItem>
            <SelectItem id="svelte">Svelte</SelectItem>
            <SelectItem id="nextjs">Next.js</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <p className="text-text-100 text-sm">
        Selected count:{" "}
        <span className="font-medium text-title-50">{selected.length}</span>
      </p>
    </div>
  );
}
