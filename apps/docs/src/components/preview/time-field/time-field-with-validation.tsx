"use client";

import {
  TimeField,
  TimeFieldDescription,
  TimeFieldError,
  TimeFieldInput,
  TimeFieldLabel
} from "@/registry/core/time-field";
import { Time } from "@internationalized/date";

export default function TimeFieldWithValidation() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-2">
      <TimeField
        minValue={new Time(9)}
        maxValue={new Time(17)}
        label="Meeting time"
        description="Business hours only"
        errorMessage="Must be between 9 AM and 5 PM"
      >
        <TimeFieldLabel />
        <TimeFieldInput />
        <TimeFieldDescription />
        <TimeFieldError />
      </TimeField>
    </div>
  );
}
