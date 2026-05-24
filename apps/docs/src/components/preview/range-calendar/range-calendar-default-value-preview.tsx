"use client";

import {
  RangeCalendar,
  RangeCalendarCell,
  RangeCalendarGrid,
  RangeCalendarGridBody,
  RangeCalendarGridHeader,
  RangeCalendarHeader,
  RangeCalendarHeading,
  RangeNavButton
} from "@/registry/core/range-calendar";
import { CalendarDate } from "@internationalized/date";

export default function RangeCalendarDefaultValuePreview() {
  return (
    <div className="flex justify-center p-6">
      <RangeCalendar
        aria-label="Default stay range"
        defaultValue={{
          start: new CalendarDate(2024, 11, 12),
          end: new CalendarDate(2024, 11, 16)
        }}
      >
        <RangeCalendarHeader>
          <RangeNavButton slot="previous" />
          <RangeCalendarHeading />
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
