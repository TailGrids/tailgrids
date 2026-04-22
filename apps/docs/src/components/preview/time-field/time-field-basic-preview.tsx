"use client";

import {
  TimeField,
  TimeFieldDescription,
  TimeFieldError,
  TimeFieldInput,
  TimeFieldLabel
} from "@/registry/core/time-field";

export default function TimeFieldPreview() {
  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <TimeField
        label="Meeting time"
        description="Choose a start time for the meeting."
      >
        <TimeFieldLabel />
        <TimeFieldInput />
        <TimeFieldDescription />
        <TimeFieldError />
      </TimeField>
    </div>
  );
}
