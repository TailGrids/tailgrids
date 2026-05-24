"use client";

import {
  RangeCalendar,
  RangeCalendarCell,
  RangeCalendarGrid,
  RangeCalendarGridBody,
  RangeCalendarGridHeader,
  RangeCalendarHeader,
  RangeNavButton
} from "@/registry/core/range-calendar";

export default function RangeCalendarInvalidPreview() {
  return (
    <div className="flex justify-center p-6">
      <RangeCalendar aria-label="Invalid range" isInvalid>
        <RangeCalendarHeader>
          <RangeNavButton slot="previous" />
          <span className="flex-1 text-center">Invalid state</span>
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
