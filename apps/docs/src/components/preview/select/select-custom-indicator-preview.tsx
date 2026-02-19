"use client";

import {
  Select,
  SelectContent,
  SelectIndicator,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/registry/core/select";
import { Search1 } from "@tailgrids/icons";

export default function SelectCustomIndicatorPreview() {
  return (
    <div className="flex w-full max-w-50 flex-col gap-4">
      <Select>
        <SelectTrigger>
          <SelectValue />
          <SelectIndicator>
            <Search1 className="h-5 w-5" />
          </SelectIndicator>
        </SelectTrigger>
        <SelectContent>
          <SelectItem id="apple">Apple</SelectItem>
          <SelectItem id="banana">Banana</SelectItem>
          <SelectItem id="orange">Orange</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
