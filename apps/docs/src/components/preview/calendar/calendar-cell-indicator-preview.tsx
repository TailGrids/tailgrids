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
import { CalendarDate } from "@internationalized/date";

export default function CalendarCellIndicatorPreview() {
  const datesWithEvents = [7, 12, 14, 18, 22];

  return (
    <div className="flex justify-center p-6">
      <Calendar
        aria-label="Event timeline"
        defaultValue={new CalendarDate(2026, 8, 14)}
      >
        <CalendarHeader>
          <NavButton slot="previous" />
          <CalendarHeading />
          <NavButton slot="next" />
        </CalendarHeader>

        <CalendarGrid>
          <CalendarGridHeader />
          <CalendarGridBody>
            {date => (
              <CalendarCell
                date={date}
                className={
                  datesWithEvents.includes(date.day)
                    ? "relative after:absolute after:bottom-1 after:h-1 after:w-1 after:rounded-full after:bg-current after:content-[''] data-[selected=true]:after:bg-white-100"
                    : ""
                }
              />
            )}
          </CalendarGridBody>
        </CalendarGrid>
      </Calendar>
    </div>
  );
}
