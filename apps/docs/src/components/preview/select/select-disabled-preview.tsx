"use client";

import {
  Select,
  SelectContent,
  SelectIndicator,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/registry/core/select";

export default function SelectDisabledPreview() {
  return (
    <div className="flex w-full flex-col gap-4 max-w-50">
      <div className="space-y-2">
        <Select placeholder="Select a plan">
          <SelectLabel>Disabled Item</SelectLabel>
          <SelectTrigger>
            <SelectValue />
            <SelectIndicator />
          </SelectTrigger>
          <SelectContent>
            <SelectItem id="basic">Basic Plan</SelectItem>
            <SelectItem id="standard">Standard Plan</SelectItem>
            <SelectItem id="premium" isDisabled>
              Premium Plan (Disabled)
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Select placeholder="Select an option" isDisabled>
          <SelectLabel>Disabled Select</SelectLabel>
          <SelectTrigger>
            <SelectValue />
            <SelectIndicator />
          </SelectTrigger>
          <SelectContent>
            <SelectItem id="option1">Option 1</SelectItem>
            <SelectItem id="option2">Option 2</SelectItem>
            <SelectItem id="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
