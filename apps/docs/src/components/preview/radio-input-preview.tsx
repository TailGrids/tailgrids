"use client";

import { RadioInput } from "@/registry/core/radio-input";
import { useState } from "react";

export default function RadioInputPreview() {
  const [selected, setSelected] = useState("option2");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-fit mx-auto">
      {/* Controlled */}
      <div>
        <h3 className="text-sm font-medium mb-3 text-neutral-700">
          Controlled
        </h3>
        <div className="flex flex-col gap-3">
          <RadioInput
            name="controlled"
            label="Option 1"
            value="option1"
            checked={selected === "option1"}
            onChange={e => setSelected(e.target.value)}
          />
          <RadioInput
            name="controlled"
            label="Option 2"
            value="option2"
            checked={selected === "option2"}
            onChange={e => setSelected(e.target.value)}
          />
          <RadioInput
            name="controlled"
            label="Option 3"
            value="option3"
            checked={selected === "option3"}
            onChange={e => setSelected(e.target.value)}
          />
        </div>
        <p className="text-sm text-neutral-600 mt-3">Selected: {selected}</p>
      </div>

      {/* Use Case: Plans */}
      <fieldset>
        <legend className="text-sm font-medium mb-3 text-neutral-700">
          Select a plan
        </legend>
        <div className="flex flex-col gap-3">
          <RadioInput name="plan" label="Basic - $9/month" value="basic" />
          <RadioInput
            name="plan"
            label="Pro - $29/month"
            value="pro"
            defaultChecked
          />
          <RadioInput
            name="plan"
            label="Enterprise - $99/month"
            value="enterprise"
          />
        </div>
      </fieldset>

      {/* Sizes */}
      <div>
        <h3 className="text-sm font-medium mb-3 text-neutral-700">Sizes</h3>
        <div className="flex flex-col gap-3">
          <RadioInput size="sm" name="size" label="Small radio" value="sm" />
          <RadioInput size="md" name="size" label="Medium radio" value="md" />
          <RadioInput
            size="md"
            name="size"
            label="Medium disabled"
            value="md"
            disabled
          />
        </div>
      </div>
    </div>
  );
}
