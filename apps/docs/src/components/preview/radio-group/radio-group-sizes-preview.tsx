"use client";

import { RadioGroup, RadioGroupItem } from "@/registry/core/radio-group";
import { useState } from "react";

export function RadioGroupSizesPreview() {
  const [smallValue, setSmallValue] = useState("small");
  const [mediumValue, setMediumValue] = useState("medium");
  const [largeValue, setLargeValue] = useState("large");

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-semibold text-text-900">Small Size</p>
        <RadioGroup value={smallValue} onChange={setSmallValue}>
          <RadioGroupItem
            value="small"
            size="sm"
            description="Most compact option"
          >
            Mobile View
          </RadioGroupItem>
          <RadioGroupItem value="small2" size="sm" description="Quick actions">
            Quick Toggle
          </RadioGroupItem>
        </RadioGroup>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-semibold text-text-900">Medium Size</p>
        <RadioGroup value={mediumValue} onChange={setMediumValue}>
          <RadioGroupItem value="medium" description="Standard desktop layout">
            Desktop View
          </RadioGroupItem>
          <RadioGroupItem
            value="medium2"
            description="Perfect for everyday use"
          >
            Balanced Experience
          </RadioGroupItem>
        </RadioGroup>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-semibold text-text-900">Large Size</p>
        <RadioGroup value={largeValue} onChange={setLargeValue}>
          <RadioGroupItem
            value="large"
            size="lg"
            description="Enhanced readability"
          >
            Large Display
          </RadioGroupItem>
          <RadioGroupItem
            value="large2"
            size="lg"
            description="Easier to click"
          >
            Accessibility Mode
          </RadioGroupItem>
        </RadioGroup>
      </div>
    </div>
  );
}
