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

export default function SelectMultiplePreview() {
  const [selected, setSelected] = useState<Key[]>([]);

  return (
    <div className="w-50">
      <Select
        selectionMode="multiple"
        name="fruits"
        value={selected}
        onChange={setSelected}
      >
        <SelectLabel>Select Fruits</SelectLabel>

        <SelectTrigger>
          <span className="truncate">
            {selected.length === 0
              ? "Select options"
              : selected
                  .map(key => {
                    const labels: Record<string, string> = {
                      apple: "Apple",
                      banana: "Banana",
                      orange: "Orange",
                      strawberry: "Strawberry",
                      blueberry: "Blueberry"
                    };
                    return labels[key as string] || key;
                  })
                  .join(", ")}
          </span>
          <SelectIndicator />
        </SelectTrigger>

        <SelectContent>
          <SelectItem id="apple">Apple</SelectItem>
          <SelectItem id="banana">Banana</SelectItem>
          <SelectItem id="orange">Orange</SelectItem>
          <SelectItem id="strawberry">Strawberry</SelectItem>
          <SelectItem id="blueberry">Blueberry</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
