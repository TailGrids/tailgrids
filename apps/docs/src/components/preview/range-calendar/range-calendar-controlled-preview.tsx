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
  RangeNavButton,
  type RangeValue
} from "@/registry/core/range-calendar";
import { CalendarDate, getLocalTimeZone } from "@internationalized/date";
import { useState } from "react";

export default function RangeCalendarControlledPreview() {
  const [value, setValue] = useState<RangeValue<DateValue>>(() => ({
    start: new CalendarDate(2026, 7, 4),
    end: new CalendarDate(2026, 7, 8)
  }));

  const intlFormatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  const toJSDate = (d: DateValue): Date => {
    return d.toDate(getLocalTimeZone());
  };

  return (
    <div className="flex justify-center p-6">
      <div className="space-y-4">
        <RangeCalendar
          aria-label="Controlled stay dates"
          value={value}
          onChange={setValue}
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

        <p className="text-sm text-text-100 text-center">
          Selected:{" "}
          {value && value.start && value.end
            ? intlFormatter.formatRange(
                toJSDate(value.start),
                toJSDate(value.end)
              )
            : "None"}
        </p>
      </div>
    </div>
  );
}
