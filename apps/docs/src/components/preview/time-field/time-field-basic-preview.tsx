"use client";

import { DateInput, DateSegment } from "@/registry/core/date-field";
import { Description } from "@/registry/core/description";
import { Label } from "@/registry/core/label";
import { TimeField } from "@/registry/core/time-field";

export default function TimeFieldPreview() {
  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <TimeField>
        <Label>Meeting time</Label>
        <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
        <Description>Choose a start time for the meeting.</Description>
      </TimeField>
    </div>
  );
}
