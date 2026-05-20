"use client";

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
import { getLocalTimeZone, today } from "@internationalized/date";

export default function CalendarDisabledCellPreview() {
  const now = today(getLocalTimeZone());
  const minValue = now.add({ days: 2 });
  const maxValue = minValue.add({ days: 20 });

  return (
    <div className="flex justify-center p-6">
      <Calendar
        aria-label="Unavailable check-in date"
        defaultValue={now.add({ days: 2 })}
        minValue={minValue}
        maxValue={maxValue}
      >
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
    </div>
  );
}
