"use client";

import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeader,
  CalendarYearPicker,
  NavButton
} from "@/registry/core/calendar";

export default function CalendarYearPickerPreview() {
  return (
    <div className="flex justify-center p-6">
      <Calendar aria-label="Birth date">
        <CalendarHeader>
          <NavButton slot="previous" />
          <span className="flex flex-1 justify-center">
            <CalendarYearPicker />
          </span>
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
