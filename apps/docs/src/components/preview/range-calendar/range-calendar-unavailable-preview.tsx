"use client";

import {
  DateValue,
  RangeCalendar,
  RangeCalendarCell,
  RangeCalendarGrid,
  RangeCalendarGridBody,
  RangeCalendarGridHeader,
  RangeCalendarHeader,
  RangeCalendarHeading,
  RangeNavButton
} from "@/registry/core/range-calendar";
import { isWeekend } from "@internationalized/date";
import { useLocale } from "react-aria-components";

export default function RangeCalendarUnavailablePreview() {
  const { locale } = useLocale();

  const isDateUnavailable = (date: DateValue) => isWeekend(date, locale);

  return (
    <div className="flex justify-center p-6">
      <RangeCalendar
        aria-label="Unavailable range"
        isDateUnavailable={isDateUnavailable}
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
