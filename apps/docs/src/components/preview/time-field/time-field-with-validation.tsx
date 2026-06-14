"use client";

import { Description } from "@/registry/core/description";
import { FieldError } from "@/registry/core/field";
import { Label } from "@/registry/core/label";
import { TimeField } from "@/registry/core/time-field";
import { DateInput, DateSegment } from "@/registry/core/date-field";
import { Time } from "@internationalized/date";

export default function TimeFieldWithValidation() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-2">
      <TimeField minValue={new Time(9)} maxValue={new Time(17)}>
        <Label>Meeting Time</Label>
        <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
        <Description>Business hours only</Description>
        <FieldError>Must be between 9 AM and 5 PM</FieldError>
      </TimeField>
    </div>
  );
}
