"use client";

import { CalendarIcon } from "@/components/ui/icons";
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
import { DateInput, DateSegment } from "@/registry/core/date-field";
import {
  DatePicker,
  DatePickerGroup,
  DatePickerPopover,
  DatePickerTrigger
} from "@/registry/core/date-picker";
import { FieldDescription } from "@/registry/core/field";
import {
  CalendarDate,
  getLocalTimeZone,
  isWeekend,
  today
} from "@internationalized/date";
import { useMemo, useState } from "react";
import { useDateFormatter, useLocale } from "react-aria";

export default function DatePickerWithAvailabilityPreview() {
  const { locale } = useLocale();
  const [date, setDate] = useState<CalendarDate | null>(null);
  const formatter = useDateFormatter({ dateStyle: "full" });

  const now = today(getLocalTimeZone());

  const { availableDates, totalAvailable } = useMemo(() => {
    const dates: CalendarDate[] = [];
    let current = now;
    for (let i = 0; i < 60; i++) {
      if (!isWeekend(current, locale)) {
        dates.push(current);
      }
      current = current.add({ days: 1 });
    }
    return { availableDates: dates, totalAvailable: dates.length };
  }, [now, locale]);

  const isDateAvailable = (d: CalendarDate) =>
    availableDates.some(a => a.compare(d) === 0);

  return (
    <div className="flex flex-col items-center gap-6 w-full p-4">
      <div className="max-w-xs w-full">
        <DatePicker
          value={date}
          onChange={setDate}
          isDateUnavailable={d => !isDateAvailable(d as CalendarDate)}
          minValue={now}
        >
          <DatePickerGroup>
            <DateInput>
              {segment => <DateSegment segment={segment} />}
            </DateInput>
            <DatePickerTrigger>
              <CalendarIcon className="size-5" />
            </DatePickerTrigger>
          </DatePickerGroup>

          <DatePickerPopover>
            <Calendar
              aria-label="Check availability"
              minValue={now}
              isDateUnavailable={d => !isDateAvailable(d as CalendarDate)}
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
          </DatePickerPopover>
        </DatePicker>

        {date && (
          <FieldDescription className="mt-4 text-sm text-text-50">
            Selected: {formatter.format(date.toDate(getLocalTimeZone()))}
          </FieldDescription>
        )}
      </div>
    </div>
  );
}
