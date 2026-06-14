"use client";

import { CalendarIcon, CheckmarkIcon, XIcon } from "@/components/ui/icons";
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
import { Button } from "@/registry/core/button";
import { DateInput, DateSegment } from "@/registry/core/date-field";
import {
  DatePicker,
  DatePickerGroup,
  DatePickerPopover,
  DatePickerTrigger
} from "@/registry/core/date-picker";
import {
  FieldDescription
} from "@/registry/core/field";
import { CalendarDate, getLocalTimeZone, today } from "@internationalized/date";
import { useRef, useState } from "react";
import { useDateFormatter } from "react-aria";

export default function DatePickerWithConfirmationPreview() {
  const [value, setValue] = useState<CalendarDate | null>(
    today(getLocalTimeZone())
  );
  const [savedValue, setSavedValue] = useState<CalendarDate | null>(
    today(getLocalTimeZone())
  );
  const [isOpen, setIsOpen] = useState(false);
  const [confirmedDate, setConfirmedDate] = useState<CalendarDate | null>(
    today(getLocalTimeZone())
  );
  const selectedByCalendar = useRef(false);
  const formatter = useDateFormatter({ dateStyle: "full" });

  return (
    <div className="flex flex-col items-center gap-6 w-full p-4">
      <div className="max-w-xs w-full">
        <DatePicker
          value={value}
          onChange={v => {
            if (isOpen) {
              selectedByCalendar.current = true;
            }
            setValue(v as CalendarDate | null);
          }}
          isOpen={isOpen}
          onOpenChange={open => {
            if (!open && selectedByCalendar.current) {
              selectedByCalendar.current = false;
              return;
            }
            if (open) {
              setSavedValue(value);
            }
            setIsOpen(open);
          }}
        >
          <DatePickerGroup>
            <DateInput>
              {segment => <DateSegment segment={segment} />}
            </DateInput>
            <DatePickerTrigger>
              <CalendarIcon />
            </DatePickerTrigger>
          </DatePickerGroup>

          <DatePickerPopover>
            <Calendar aria-label="Select appointment date">
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

            <div className="flex items-center justify-end gap-2 border-t border-base-100 px-4 py-3">
              <Button
                variant="ghost"
                size="sm"
                onPress={() => {
                  setValue(savedValue);
                  setIsOpen(false);
                }}
              >
                <XIcon className="size-4" />
                Cancel
              </Button>
              <Button
                size="sm"
                onPress={() => {
                  setConfirmedDate(value);
                  setIsOpen(false);
                }}
              >
                <CheckmarkIcon className="size-4" />
                Confirm
              </Button>
            </div>
          </DatePickerPopover>
        </DatePicker>

        {confirmedDate && (
          <FieldDescription className="mt-4 text-sm text-text-50">
            Appointment confirmed for{" "}
            {formatter.format(confirmedDate.toDate(getLocalTimeZone()))}
          </FieldDescription>
        )}
      </div>
    </div>
  );
}
