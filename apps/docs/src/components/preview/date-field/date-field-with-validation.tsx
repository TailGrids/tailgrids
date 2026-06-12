"use client";

import { DateField, DateInput, DateSegment } from "@/registry/core/date-field";
import { Description } from "@/registry/core/description";
import { FieldError } from "@/registry/core/field";
import { Label } from "@/registry/core/label";
import { CalendarDate } from "@internationalized/date";
import { useState } from "react";

export default function DateFieldWithValidation() {
  const [value, setValue] = useState<CalendarDate | null>(
    new CalendarDate(2026, 6, 15)
  );
  const isInvalid = value ? value.day < 10 || value.day > 20 : undefined;

  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <DateField
        value={value}
        onChange={setValue}
        invalid={isInvalid}
        minValue={new CalendarDate(2026, 6, 10)}
        maxValue={new CalendarDate(2026, 6, 20)}
      >
        <Label>Appointment date</Label>
        <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
        <Description>Select a date between the 10th and 20th.</Description>
        <FieldError>Date must be between June 10 and June 20.</FieldError>
      </DateField>
    </div>
  );
}
