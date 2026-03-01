"use client";

import { RadioGroup, RadioGroupItem } from "@/registry/core/radio-group";
import { useState } from "react";

export function RadioGroupCardPreview() {
  const [value, setValue] = useState("individual");

  return (
    <RadioGroup
      value={value}
      onChange={setValue}
      className="grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      <RadioGroupItem
        value="individual"
        description="For freelancers"
        variant="card"
        className="flex-1"
      >
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-base">Individual</span>
          <span className="text-primary-600 font-bold">$9/mo</span>
        </div>
      </RadioGroupItem>
      <RadioGroupItem
        value="team"
        description="For small teams"
        variant="card"
        className="flex-1"
      >
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-base">Team</span>
          <span className="text-primary-600 font-bold">$29/mo</span>
        </div>
      </RadioGroupItem>
      <RadioGroupItem
        value="enterprise"
        description="For large orgs"
        variant="card"
        className="flex-1"
      >
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-base">Enterprise</span>
          <span className="text-primary-600 font-bold">Custom</span>
        </div>
      </RadioGroupItem>
    </RadioGroup>
  );
}
