"use client";

import { RadioGroup, RadioGroupItem } from "@/registry/core/radio-group";
import { useState } from "react";

export function RadioGroupControlledPreview() {
  const [value, setValue] = useState("option-one");

  const resetValue = () => setValue("option-one");
  const selectTwo = () => setValue("option-two");

  return (
    <div className="flex flex-col gap-6 w-full max-w-sm">
      <div className="flex flex-col gap-2">
        <RadioGroup value={value} onChange={setValue}>
          <RadioGroupItem value="option-one">Option One</RadioGroupItem>
          <RadioGroupItem value="option-two">Option Two</RadioGroupItem>
          <RadioGroupItem value="option-three">Option Three</RadioGroupItem>
        </RadioGroup>
      </div>

      <div className="flex gap-2">
        <button
          onClick={selectTwo}
          className="px-4 py-2 text-sm font-medium bg-base-100 hover:bg-base-200 text-text-50 rounded-lg transition-colors border border-base-200"
        >
          Select Option Two
        </button>
        <button
          onClick={resetValue}
          className="px-4 py-2 text-sm font-medium bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors border border-red-100"
        >
          Reset to Default
        </button>
      </div>
    </div>
  );
}
