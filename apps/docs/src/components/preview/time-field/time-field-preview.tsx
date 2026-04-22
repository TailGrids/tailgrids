"use client";

import {
  TimeField,
  TimeFieldDescription,
  TimeFieldError,
  TimeFieldInput,
  TimeFieldLabel
} from "@/registry/core/time-field";
import { Time } from "@internationalized/date";
import { useState } from "react";

export default function TimeFieldPreview() {
  const [value, setValue] = useState<Time | null>(new Time(9, 30));

  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <TimeField
        label="Meeting time"
        description="Choose a start time for the meeting."
        value={value}
        onChange={setValue}
      >
        <TimeFieldLabel />
        <TimeFieldInput />
        <TimeFieldDescription />
        <TimeFieldError />
      </TimeField>
    </div>
  );
}

