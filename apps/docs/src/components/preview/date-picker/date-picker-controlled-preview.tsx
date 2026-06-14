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
import { CalendarDate, getLocalTimeZone } from "@internationalized/date";
import { useState } from "react";
import { useDateFormatter } from "react-aria";

export default function DatePickerControlledPreview() {
  const [date, setDate] = useState<CalendarDate | null>(null);
  const formatter = useDateFormatter({ dateStyle: "full" });

  return (
    <div className="max-w-xs w-full">
      <DatePicker value={date} onChange={setDate}>
        <FieldLabel>Event Date</FieldLabel>

        <DatePickerGroup>
          <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
          <DatePickerTrigger>
            <CalendarIcon className="size-5" />
          </DatePickerTrigger>
        </DatePickerGroup>

        {date && (
          <FieldDescription>
            {formatter.format(date.toDate(getLocalTimeZone()))}
          </FieldDescription>
        )}

        <DatePickerPopover>
          <Calendar>
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
