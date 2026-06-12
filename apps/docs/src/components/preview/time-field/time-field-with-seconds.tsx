"use client";

import { Label } from "@/registry/core/label";
import { TimeField } from "@/registry/core/time-field";
import { DateInput, DateSegment } from "@/registry/core/date-field";
import { Time } from "@internationalized/date";

export default function TimeFieldWithSeconds() {
  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <TimeField defaultValue={new Time(9, 30, 15)} granularity="second">
        <Label>Precise Time</Label>
        <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
      </TimeField>
    </div>
  );
}
