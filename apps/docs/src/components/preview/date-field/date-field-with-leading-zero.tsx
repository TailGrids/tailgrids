"use client";

import { DateField, DateInput, DateSegment } from "@/registry/core/date-field";
import { Description } from "@/registry/core/description";
import { Label } from "@/registry/core/label";
import { CalendarDate } from "@internationalized/date";
import { useState } from "react";

export default function DateFieldWithLeadingZero() {
  const [value, setValue] = useState<CalendarDate | null>(
    new CalendarDate(2026, 6, 5)
  );

  return (
    <DateField value={value} onChange={setValue} shouldForceLeadingZeros>
      <Label>Appointment date</Label>
      <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
      <Description>Leading zeros are shown for day and month.</Description>
    </DateField>
  );
}
