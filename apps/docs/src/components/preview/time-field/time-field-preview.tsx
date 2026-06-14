"use client";

import { DateInput, DateSegment } from "@/registry/core/date-field";
import { Description } from "@/registry/core/description";
import { Label } from "@/registry/core/label";
import { TimeField } from "@/registry/core/time-field";
import { Time } from "@internationalized/date";
import { useState } from "react";

export default function TimeFieldPreview() {
  const [value, setValue] = useState<Time | null>(new Time(9, 30));

  return (
    <TimeField value={value} onChange={setValue}>
      <Label>Meeting time</Label>
      <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
      <Description>Choose a start time for the meeting.</Description>
    </TimeField>
  );
}
