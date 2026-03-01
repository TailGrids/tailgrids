"use client";

import { RadioGroup, RadioGroupItem } from "@/registry/core/radio-group";

export function RadioGroupDisabledPreview() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-text-700 mb-2">
          Entire Group Disabled
        </h3>
        <RadioGroup isDisabled>
          <RadioGroupItem value="option-one">
            Disabled Option One
          </RadioGroupItem>
          <RadioGroupItem value="option-two">
            Disabled Option Two
          </RadioGroupItem>
        </RadioGroup>
      </div>

      <div>
        <h3 className="text-sm font-medium text-text-700 mb-2">
          Partially Disabled Items
        </h3>
        <RadioGroup>
          <RadioGroupItem
            value="enabled"
            description="This option can be selected"
          >
            Enabled Option
          </RadioGroupItem>
          <RadioGroupItem
            value="disabled"
            isDisabled
            description="This option is disabled"
          >
            Disabled Option
          </RadioGroupItem>
          <RadioGroupItem
            value="premium"
            isDisabled
            description="Requires premium subscription"
          >
            Premium Option
          </RadioGroupItem>
        </RadioGroup>
      </div>
    </div>
  );
}
