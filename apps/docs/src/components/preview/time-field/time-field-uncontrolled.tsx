"use client";
import {
  TimeField,
  TimeFieldInput,
  TimeFieldLabel
} from "@/registry/core/time-field";
import { Time } from "@internationalized/date";

export default function TimeFieldUncontrolled() {
  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <TimeField label="Meeting time" defaultValue={new Time(9, 30)}>
        <TimeFieldLabel />
        <TimeFieldInput />
      </TimeField>
    </div>
  );
}
