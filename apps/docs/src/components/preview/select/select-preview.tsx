"use client";

import {
  Select,
  SelectContent,
  SelectIndicator,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/registry/core/select";

export default function SelectPreview() {
  return (
    <div className="w-full max-w-50">
      <Select placeholder="Select a fruit">
        <SelectTrigger>
          <SelectValue />
          <SelectIndicator />
        </SelectTrigger>
        <SelectContent>
          <SelectItem id="apple">Apple</SelectItem>
          <SelectItem id="banana">Banana</SelectItem>
          <SelectItem id="orange">Orange</SelectItem>
          <SelectItem id="grape">Grape</SelectItem>
          <SelectItem id="strawberry">Strawberry</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
