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
import { getLocalTimeZone, today } from "@internationalized/date";
import { Check, InfoTriangle } from "@tailgrids/icons";
import { useState } from "react";

export default function CalendarValidationPreview() {
  const [selectedDate, setSelectedDate] = useState<DateValue | null>(null);
  const [error, setError] = useState<string>("");

  const now = today(getLocalTimeZone());

  const handleDateChange = (date: DateValue | null) => {
    if (!date) {
      setSelectedDate(null);
      setError("");
      return;
    }

    // Validation: Only allow dates from today onwards
    const minValueProvided = date.compare(now);

    if (minValueProvided < 0) {
      setError("Please select a date from today onwards");
      setSelectedDate(null);
      return;
    }

    // Validation: Don't allow dates more than 7 days in the future
    const maxValueProvided = date.compare(now);

    if (maxValueProvided > 7) {
      setError("Please select a date within the next 7 days");
      setSelectedDate(null);
      return;
    }

    setSelectedDate(date);
    setError("");
  };

  const formattedDate = selectedDate
    ? `${selectedDate.year}-${String(selectedDate.month).padStart(2, "0")}-${String(selectedDate.day).padStart(2, "0")}`
    : "No date selected";

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-start gap-4">
        <Calendar value={selectedDate} onChange={handleDateChange}>
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

      <div className="flex flex-col gap-3 rounded-lg bg-base-50 p-4">
        <div>
          <label className="text-xs font-medium text-text-100">
            Selected Date:
          </label>
          <p className="mt-1 text-sm font-semibold text-title-50">
            {formattedDate}
          </p>
        </div>

        <div role="status" aria-live="polite" aria-atomic="true">
          {error && (
            <div className="rounded-md flex items-center gap-2 bg-red-50 p-2 text-xs font-medium text-red-600">
              <InfoTriangle size={20} /> {error}
            </div>
          )}

          {selectedDate && !error && (
            <div className="rounded-md flex items-center gap-2 bg-green-50 p-2 text-xs font-medium text-green-600">
              <Check size={20} /> Valid appointment date selected
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
