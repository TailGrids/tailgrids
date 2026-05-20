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
import { isWeekend } from "@internationalized/date";
import { useLocale } from "react-aria-components";

export default function CalendarPreview() {
  const { locale } = useLocale();

  const isDateUnavailable = (date: DateValue) => isWeekend(date, locale);

  return (
    <div className="flex justify-center p-6">
      <Calendar
        aria-label="Appointment date"
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
