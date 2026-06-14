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
import { CalendarDate, getLocalTimeZone, today } from "@internationalized/date";
import { useState } from "react";
import { useDateFormatter } from "react-aria";

export default function DatePickerBasicPreview() {
  const [date, setDate] = useState<CalendarDate | null>(
    today(getLocalTimeZone())
  );
  const formatter = useDateFormatter({ dateStyle: "full" });

  return (
    <div className="flex flex-col items-center gap-6 w-full p-4">
      <div className="max-w-xs w-full">
        <DatePicker value={date} onChange={setDate}>
          <DatePickerGroup>
            <DateInput>
              {segment => <DateSegment segment={segment} />}
            </DateInput>
            <DatePickerTrigger>
              <CalendarIcon />
            </DatePickerTrigger>
          </DatePickerGroup>

          <DatePickerPopover>
            <Calendar>
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
