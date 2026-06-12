"use client";

import { DateField, DateInput, DateSegment } from "@/registry/core/date-field";
import { Description } from "@/registry/core/description";
import { Label } from "@/registry/core/label";

export default function DateFieldBasicPreview() {
  return (
    <DateField className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <Label>Appointment date</Label>
      <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
      <Description>Select your preferred appointment date.</Description>
    </DateField>
  );
}
