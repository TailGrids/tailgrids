"use client";

import { CalendarIcon } from "@/components/ui/icons";
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeader,
  CalendarHeading,
  NavButton
} from "@/registry/core/calendar";
import { DateInput, DateSegment } from "@/registry/core/date-field";
import {
  DatePicker,
  DatePickerGroup,
  DatePickerPopover,
  DatePickerTrigger
} from "@/registry/core/date-picker";
import { FieldDescription, FieldLabel } from "@/registry/core/field";
import { CalendarDate, getLocalTimeZone, today } from "@internationalized/date";
import { useState } from "react";

export default function DatePickerWithConstraintsPreview() {
  const [date, setDate] = useState<CalendarDate | null>(null);
  const now = today(getLocalTimeZone());
  const minDate = now;
  const maxDate = now.add({ months: 3 });

  return (
    <div className="max-w-xs w-full">
      <DatePicker
        value={date}
        onChange={setDate}
        minValue={minDate}
        maxValue={maxDate}
        required
      >
        <FieldLabel>Appointment Date</FieldLabel>

        <DatePickerGroup>
          <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
          <DatePickerTrigger>
            <CalendarIcon className="size-5" />
          </DatePickerTrigger>
        </DatePickerGroup>

        <FieldDescription>Book within the next 3 months</FieldDescription>

        <DatePickerPopover>
          <Calendar aria-label="Appointment date">
            <CalendarHeader>
              <NavButton slot="previous" />
              <CalendarHeading />
              <NavButton slot="next" />
            </CalendarHeader>

            <CalendarGrid>
              <CalendarGridHeader />
              <CalendarGridBody>
                {date => <CalendarCell date={date} />}
              </CalendarGridBody>
            </CalendarGrid>
          </Calendar>
        </DatePickerPopover>
      </DatePicker>
    </div>
  );
}
