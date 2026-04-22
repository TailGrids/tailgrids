"use client";

import {
  TimeField,
  TimeFieldInput,
  TimeFieldLabel
} from "@/registry/core/time-field";
import { Time } from "@internationalized/date";

export default function TimeFieldWithSeconds() {
  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <TimeField
        label="Precise Time"
        defaultValue={new Time(9, 30, 15)}
        granularity="second"
      >
        <TimeFieldLabel />
        <TimeFieldInput />
      </TimeField>
    </div>
  );
}
