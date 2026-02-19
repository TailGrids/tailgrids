"use client";

import {
  Select,
  SelectContent,
  SelectHeader,
  SelectIndicator,
  SelectItem,
  SelectSection,
  SelectSeparator,
  SelectTrigger,
  SelectValue
} from "@/registry/core/select";

export default function SelectWithSectionsPreview() {
  return (
    <div className="w-full max-w-50">
      <Select placeholder="Select a food">
        <SelectTrigger>
          <SelectValue />
          <SelectIndicator />
        </SelectTrigger>
        <SelectContent>
          <SelectSection>
            <SelectHeader>Fruits</SelectHeader>
            <SelectItem id="apple">Apple</SelectItem>
            <SelectItem id="banana">Banana</SelectItem>
            <SelectItem id="orange">Orange</SelectItem>
          </SelectSection>
          <SelectSeparator />
          <SelectSection>
            <SelectHeader>Vegetables</SelectHeader>
            <SelectItem id="carrot">Carrot</SelectItem>
            <SelectItem id="broccoli">Broccoli</SelectItem>
            <SelectItem id="spinach">Spinach</SelectItem>
          </SelectSection>
        </SelectContent>
      </Select>
    </div>
  );
}
