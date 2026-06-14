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
import { FieldLabel } from "@/registry/core/field";
import { getLocalTimeZone, today } from "@internationalized/date";

export default function DatePickerUncontrolledPreview() {
  return (
    <div className="max-w-xs w-full">
      <DatePicker defaultValue={today(getLocalTimeZone())}>
        <FieldLabel>Event Date</FieldLabel>

        <DatePickerGroup data-disabled>
          <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
          <DatePickerTrigger>
            <CalendarIcon className="size-5" />
          </DatePickerTrigger>
        </DatePickerGroup>

        <DatePickerPopover>
          <Calendar aria-label="Event date">
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
