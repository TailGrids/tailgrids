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
import { CalendarDate } from "@internationalized/date";

function IndicatorCell({ date }: { date: CalendarDate }) {
  const day = date.day;

  return (
    <div className="flex flex-col items-center gap-1">
      <RangeCalendarCell date={date} />
      {day % 5 === 0 ? (
        <span className="size-1.5 block rounded-full bg-primary-500" />
      ) : null}
    </div>
  );
}

export default function RangeCalendarCellIndicatorPreview() {
  return (
    <div className="flex justify-center p-6">
      <RangeCalendar
        aria-label="Range with indicators"
        defaultValue={{
          start: new CalendarDate(2024, 11, 12),
          end: new CalendarDate(2024, 11, 16)
        }}
      >
        <RangeCalendarHeader>
          <RangeNavButton slot="previous" />
          <span className="flex-1 text-center">With indicators</span>
          <RangeNavButton slot="next" />
        </RangeCalendarHeader>

        <RangeCalendarGrid>
          <RangeCalendarGridHeader />
          <RangeCalendarGridBody>
            {date => <IndicatorCell date={date} />}
          </RangeCalendarGridBody>
        </RangeCalendarGrid>
      </RangeCalendar>
    </div>
  );
}
