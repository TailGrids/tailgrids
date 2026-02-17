"use client";

import {
  Select,
  SelectContent,
  SelectIndicator,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/registry/core/select";

export default function SelectCustomValuesPreview() {
  return (
    <div className="flex w-55 flex-col gap-4">
      <Select defaultValue="pro">
        <SelectTrigger>
          <SelectValue className="**:items-start" />
          <SelectIndicator />
        </SelectTrigger>
        <SelectContent>
          <SelectItem id="free" textValue="Free Plan">
            <div className="flex flex-col">
              <span className="font-medium">Free Plan</span>
              <span className="text-xs text-text-100 italic">
                Limited features
              </span>
            </div>
          </SelectItem>
          <SelectItem id="pro" textValue="Pro Plan">
            <div className="flex flex-col">
              <span className="font-medium">Pro Plan</span>
              <span className="text-xs text-text-100 italic">
                All features included
              </span>
            </div>
          </SelectItem>
          <SelectItem id="enterprise" textValue="Enterprise Plan">
            <div className="flex flex-col">
              <span className="font-medium">Enterprise Plan</span>
              <span className="text-xs text-text-100 italic">
                Advanced security
              </span>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
