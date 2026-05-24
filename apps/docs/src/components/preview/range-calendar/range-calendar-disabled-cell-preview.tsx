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
import { getLocalTimeZone, today } from "@internationalized/date";

export default function RangeCalendarDisabledCellPreview() {
  const now = today(getLocalTimeZone());

  return (
    <div className="flex justify-center p-6">
      <RangeCalendar
        aria-label="Disabled days"
        minValue={now}
        maxValue={now.add({ days: 7 })}
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
