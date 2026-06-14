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
import { FieldDescription, FieldLabel } from "@/registry/core/field";

export default function DatePickerBasicUsagePreview() {
  return (
    <div className="flex flex-col items-center gap-6 w-full p-4">
      <div className="max-w-xs w-full">
        <DatePicker>
          <FieldLabel>Appointment Date</FieldLabel>

          <DatePickerGroup>
            <DateInput>
              {segment => <DateSegment segment={segment} />}
            </DateInput>
            <DatePickerTrigger>
              <CalendarIcon className="size-5" />
            </DatePickerTrigger>
          </DatePickerGroup>

          <FieldDescription>
            Select your preferred appointment date.
          </FieldDescription>

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
      </div>
    </div>
  );
}
