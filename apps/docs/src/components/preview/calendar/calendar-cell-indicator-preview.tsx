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
import { cn } from "@/utils/cn";
import { CalendarDate } from "@internationalized/date";

export default function CalendarCellIndicatorPreview() {
  const datesWithEvents = [
    new CalendarDate(2026, 8, 7),
    new CalendarDate(2026, 8, 12),
    new CalendarDate(2026, 8, 14),
    new CalendarDate(2026, 8, 18),
    new CalendarDate(2026, 8, 22)
  ];

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
                className={cn(
                  datesWithEvents.some(
                    eventDate =>
                      eventDate.year === date.year &&
                      eventDate.month === date.month &&
                      eventDate.day === date.day
                  ) &&
                    "relative after:absolute after:bottom-1 after:h-1 after:w-1 after:rounded-full after:bg-current after:content-[''] data-[selected=true]:after:bg-white-100"
                )}
              />
            )}
          </CalendarGridBody>
        </CalendarGrid>
      </Calendar>
    </div>
  );
}
