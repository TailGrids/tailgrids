"use client";

import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeader,
  CalendarHeading,
  NavButton,
  type DateValue
} from "@/registry/core/calendar";
import { getLocalTimeZone } from "@internationalized/date";

export default function CalendarMinMaxUnavailablePreview() {
  const isDateUnavailable = (date: DateValue) => {
    const weekday = date.toDate(getLocalTimeZone()).getDay();
    return weekday === 0 || weekday === 6;
  };

  return (
    <div className="flex justify-center p-6">
      <Calendar
        aria-label="Delivery date"
        isDateUnavailable={isDateUnavailable}
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
