"use client";

import {
  RangeCalendar,
  RangeCalendarCell,
  RangeCalendarGrid,
  RangeCalendarGridBody,
  RangeCalendarGridHeader,
  RangeCalendarHeader,
  RangeCalendarYearPicker,
  RangeNavButton
} from "@/registry/core/range-calendar";
import { CalendarDate } from "@internationalized/date";

export default function RangeCalendarYearPickerPreview() {
  return (
    <div className="flex justify-center p-6">
      <RangeCalendar
        aria-label="Range with year picker"
        defaultValue={{
          start: new CalendarDate(2024, 11, 12),
          end: new CalendarDate(2024, 11, 16)
        }}
      >
        <RangeCalendarHeader>
          <RangeNavButton slot="previous" />
          <span className="flex flex-1 justify-center">
            <RangeCalendarYearPicker />
          </span>
          <RangeNavButton slot="next" />
        </RangeCalendarHeader>

        <RangeCalendarGrid>
          <RangeCalendarGridHeader />
          <RangeCalendarGridBody>
            {date => <RangeCalendarCell date={date} />}
          </RangeCalendarGridBody>
        </RangeCalendarGrid>
      </RangeCalendar>
    </div>
  );
}
