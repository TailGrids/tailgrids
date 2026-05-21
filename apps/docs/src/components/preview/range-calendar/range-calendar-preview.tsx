"use client";

import {
  RangeCalendar,
  RangeCalendarCell,
  RangeCalendarGrid,
  RangeCalendarGridBody,
  RangeCalendarGridHeader,
  RangeCalendarHeader,
  RangeCalendarHeading,
  RangeNavButton,
  type DateValue
} from "@/registry/core/range-calendar";
import { isWeekend } from "@internationalized/date";
import { useLocale } from "react-aria-components";

export default function RangeCalendarPreview() {
  const { locale } = useLocale();

  const isDateUnavailable = (date: DateValue) => isWeekend(date, locale);

  return (
    <div className="flex justify-center p-6">
      <RangeCalendar
        aria-label="Stay dates"
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
