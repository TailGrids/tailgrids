"use client";

import { CalendarIcon } from "@/components/ui/icons";
import { ClockThree } from "@tailgrids/icons";
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
import { CalendarDate, getLocalTimeZone, today } from "@internationalized/date";
import { useState } from "react";
import { useDateFormatter } from "react-aria";
import { cn } from "@/utils/cn";

const TIME_SLOTS = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM"
];

export default function DatePickerServiceBookingPreview() {
  const [date, setDate] = useState<CalendarDate | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const formatter = useDateFormatter({ dateStyle: "long" });

  return (
    <div className="flex flex-col items-center gap-8 w-full p-4">
      <div className="max-w-xs w-full">
        <DatePicker value={date} onChange={v => {
          setDate(v as CalendarDate | null);
          setTime(null);
        }}>
          <FieldLabel>Select Service Date</FieldLabel>
          <DatePickerGroup>
            <DateInput>
              {segment => <DateSegment segment={segment} />}
            </DateInput>
            <DatePickerTrigger>
              <CalendarIcon className="size-5" />
            </DatePickerTrigger>
          </DatePickerGroup>

          <DatePickerPopover>
            <Calendar aria-label="Service date">
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
          <div className="mt-6">
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-title-50">
              <ClockThree className="size-4" />
              Available Time Slots
            </div>
            <div className="flex flex-wrap gap-2">
              {TIME_SLOTS.map(slot => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setTime(slot)}
                  className={cn(
                    "rounded-lg border px-4 py-2 text-sm font-medium transition-all",
                    time === slot
                      ? "border-button-primary-focus-ring bg-button-primary-background text-white-100"
                      : "border-base-300 bg-background-50 text-title-50 hover:border-base-500"
                  )}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        )}

        {date && time && (
          <FieldDescription className="mt-4 text-sm text-text-50">
            Service scheduled for{" "}
            {formatter.format(date.toDate(getLocalTimeZone()))} at {time}
          </FieldDescription>
        )}
      </div>
    </div>
  );
}
