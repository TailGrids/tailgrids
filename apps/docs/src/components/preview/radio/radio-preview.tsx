"use client";

import { RadioInput } from "@/registry/core/radio-input";

export default function RadioPreview() {
  return (
    <div className="flex flex-col gap-3">
      <RadioInput name="plan" label="Basic Plan" value="basic" />
      <RadioInput name="plan" label="Pro Plan" value="pro" />
      <RadioInput name="plan" label="Enterprise Plan" value="enterprise" />
    </div>
  );
}
