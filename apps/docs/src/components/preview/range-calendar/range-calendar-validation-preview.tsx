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
import { getLocalTimeZone, today } from "@internationalized/date";
import { Check, InfoTriangle } from "@tailgrids/icons";
import { useState } from "react";

export default function RangeCalendarValidationPreview() {
  const now = today(getLocalTimeZone());
  const [value, setValue] = useState<RangeValue<DateValue> | null>({
    start: now.add({ days: 3 }),
    end: now.add({ days: 5 })
  });
  const [error, setError] = useState<string>("");

  const validateRange = (range: RangeValue<DateValue> | null) => {
    if (!range) {
      setValue(null);
      setError("Please select a date range");
      return;
    }

    if (range.start.compare(now) < 0 || range.end.compare(now) < 0) {
      setValue(null);
      setError("Please select dates from today onwards");
      return;
    }

    if (
      range.start.compare(now.add({ days: 7 })) > 0 ||
      range.end.compare(now.add({ days: 7 })) > 0
    ) {
      setValue(null);
      setError("Please select dates within the next 7 days");
      return;
    }

    if (range.start.compare(range.end) > 0) {
      setValue(null);
      setError("Please make sure the start date is before the end date");
      return;
    }

    setValue(range);
    setError("");
  };

  const formattedRange =
    value?.start && value?.end
      ? `${value.start.year}-${String(value.start.month).padStart(2, "0")}-${String(value.start.day).padStart(2, "0")} to ${value.end.year}-${String(value.end.month).padStart(2, "0")}-${String(value.end.day).padStart(2, "0")}`
      : "No date range selected";

  return (
    <div className="flex flex-col gap-8">
      <RangeCalendar
        aria-label="Validation example"
        value={value}
        onChange={validateRange}
        minValue={now}
        maxValue={now.add({ days: 7 })}
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

      <div className="flex flex-col gap-3 rounded-lg bg-base-50 p-4">
        <div>
          <label className="text-xs font-medium text-text-100">
            Selected Range:
          </label>
          <p className="mt-1 text-sm font-semibold text-title-50">
            {formattedRange}
          </p>
        </div>

        <div role="status" aria-live="polite" aria-atomic="true">
          {error && (
            <div className="flex items-center gap-2 rounded-md bg-red-50 p-2 text-xs font-medium text-red-600">
              <InfoTriangle size={20} /> {error}
            </div>
          )}

          {value?.start && value?.end && !error && (
            <div className="flex items-center gap-2 rounded-md bg-green-50 p-2 text-xs font-medium text-green-600">
              <Check size={20} /> Valid date range selected
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
