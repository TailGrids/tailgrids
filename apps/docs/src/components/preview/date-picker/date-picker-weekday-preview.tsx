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
import {
  FieldDescription,
  FieldLabel
} from "@/registry/core/field";
import {
  CalendarDate,
  DateValue,
  getLocalTimeZone,
  isWeekday,
  today
} from "@internationalized/date";
import { useMemo, useState } from "react";
import { useDateFormatter, useLocale } from "react-aria";

export default function DatePickerWeekdayOnlyPreview() {
  const { locale } = useLocale();
  const [date, setDate] = useState<CalendarDate | null>(null);
  const formatter = useDateFormatter({ dateStyle: "full" });

  const now = today(getLocalTimeZone());
  const maxDate = now.add({ months: 2 });

  const unavailableDates = useMemo(() => {
    const dates: CalendarDate[] = [];
    let current = now;
    while (current.compare(maxDate) <= 0) {
      if (!isWeekday(current, locale)) {
        dates.push(current);
      }
      current = current.add({ days: 1 });
    }
    return dates;
  }, [now, maxDate, locale]);

  const isDateUnavailable = (d: DateValue) =>
    unavailableDates.some(u => u.compare(d as CalendarDate) === 0);

  return (
    <div className="flex flex-col items-center gap-6 w-full p-4">
      <div className="max-w-xs w-full">
        <DatePicker
          value={date}
          onChange={setDate}
          minValue={now}
          maxValue={maxDate}
          isDateUnavailable={isDateUnavailable}
        >
          <FieldLabel>Business Day</FieldLabel>
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
              aria-label="Business day"
              minValue={now}
              maxValue={maxDate}
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
          </DatePickerPopover>
        </DatePicker>

        {date && (
          <FieldDescription className="mt-3 text-sm text-text-50">
            {formatter.format(date.toDate(getLocalTimeZone()))}
          </FieldDescription>
        )}
      </div>
    </div>
  );
}
