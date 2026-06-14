"use client";

import { DateField, DateInput, DateSegment } from "@/registry/core/date-field";
import { Label } from "@/registry/core/label";
import { CalendarDate } from "@internationalized/date";

export default function DateFieldUncontrolled() {
  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <DateField defaultValue={new CalendarDate(2026, 6, 15)}>
        <Label>Appointment date</Label>
        <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
      </DateField>
    </div>
  );
}
