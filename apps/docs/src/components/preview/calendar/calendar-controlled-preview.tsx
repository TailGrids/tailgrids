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
import { useState } from "react";

export default function CalendarControlledPreview() {
  const [value, setValue] = useState<CalendarDate | null>(
    new CalendarDate(2026, 7, 4)
  );

  return (
    <div className="flex justify-center p-6">
      <div className="space-y-4">
        <Calendar
          aria-label="Controlled event date"
          value={value}
          onChange={setValue}
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

        <p className="text-sm text-text-100 text-center">
          Selected: {value ? value.toString() : "None"}
        </p>
      </div>
    </div>
  );
}
