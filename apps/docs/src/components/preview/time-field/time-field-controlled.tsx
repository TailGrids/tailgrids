"use client";

import {
  TimeField,
  TimeFieldInput,
  TimeFieldLabel
} from "@/registry/core/time-field";
import { Time } from "@internationalized/date";
import { useState } from "react";

export default function TimeFieldControlled() {
  const [time, setTime] = useState<Time | null>(new Time(17, 30));

  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <TimeField label="Meeting time" value={time} onChange={setTime}>
        <TimeFieldLabel />
        <TimeFieldInput />
      </TimeField>
    </div>
  );
}
