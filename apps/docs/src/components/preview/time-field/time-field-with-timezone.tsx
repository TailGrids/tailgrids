"use client";
import {
  TimeField,
  TimeFieldInput,
  TimeFieldLabel
} from "@/registry/core/time-field";
import { parseAbsoluteToLocal } from "@internationalized/date";

export default function TimeFieldWithTimezone() {
  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <TimeField
        label="UTC Event"
        hourCycle={24}
        defaultValue={parseAbsoluteToLocal("2024-03-01T14:30:00Z")}
        hideTimeZone
      >
        <TimeFieldLabel />
        <TimeFieldInput />
      </TimeField>
    </div>
  );
}
