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
  isWeekend,
  today
} from "@internationalized/date";
import { useState } from "react";
import { useDateFormatter, useLocale } from "react-aria";
import { cn } from "@/utils/cn";

const DELIVERY_OPTIONS = [
  { label: "Standard (3–5 days)", minDays: 3, maxDays: 5 },
  { label: "Express (1–2 days)", minDays: 1, maxDays: 2 }
] as const;

export default function DatePickerDeliveryEstimatePreview() {
  const { locale } = useLocale();
  const [date, setDate] = useState<CalendarDate | null>(null);
  const [delivery, setDelivery] = useState<typeof DELIVERY_OPTIONS[number] | null>(null);
  const formatter = useDateFormatter({ dateStyle: "long" });

  const now = today(getLocalTimeZone());
  const minDate = now.add({ days: 3 });
  const maxDate = now.add({ months: 1 });

  const isDateUnavailable = (d: DateValue) =>
    isWeekend(d, locale) || (d as CalendarDate).compare(now.add({ days: 3 })) < 0;

  const deliveryEstimate = date && delivery
    ? date.add({ days: delivery.minDays })
    : null;

  return (
    <div className="flex flex-col items-center gap-6 w-full p-4">
      <div className="max-w-xs w-full">
        <DatePicker
          value={date}
          onChange={v => {
            setDate(v as CalendarDate | null);
            setDelivery(null);
          }}
          minValue={minDate}
          maxValue={maxDate}
          isDateUnavailable={isDateUnavailable}
        >
          <FieldLabel>Delivery Date</FieldLabel>
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
              aria-label="Delivery date"
              minValue={minDate}
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
          <div className="mt-6">
            <FieldLabel className="mb-2 text-xs uppercase tracking-wide text-text-100">
              Shipping Speed
            </FieldLabel>
            <div className="flex flex-col gap-2">
              {DELIVERY_OPTIONS.map(option => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => setDelivery(option)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-all",
                    delivery?.label === option.label
                      ? "border-button-primary-focus-ring bg-button-primary-background/10 text-title-50"
                      : "border-base-300 bg-background-50 text-text-50 hover:border-base-500"
                  )}
                >
                  <span
                    className={cn(
                      "flex size-4 shrink-0 items-center justify-center rounded-full border-2",
                      delivery?.label === option.label
                        ? "border-button-primary-focus-ring bg-button-primary-focus-ring"
                        : "border-base-400"
                    )}
                  >
                    {delivery?.label === option.label && (
                      <span className="size-1.5 rounded-full bg-white-100" />
                    )}
                  </span>
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {deliveryEstimate && (
          <FieldDescription className="mt-4 text-sm text-text-50">
            Arrives by{" "}
            {formatter.format(deliveryEstimate.toDate(getLocalTimeZone()))}
          </FieldDescription>
        )}
      </div>
    </div>
  );
}
