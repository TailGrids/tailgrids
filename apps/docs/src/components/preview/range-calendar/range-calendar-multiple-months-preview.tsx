"use client";

import {
  RangeCalendar,
  RangeCalendarCell,
  RangeCalendarGrid,
  RangeCalendarGridBody,
  RangeCalendarGridHeader,
  RangeCalendarHeader,
  RangeCalendarHeading,
  RangeNavButton
} from "@/registry/core/range-calendar";

export default function RangeCalendarMultipleMonthsPreview() {
  return (
    <div className="flex w-full justify-center px-4 py-6 sm:px-6">
      <RangeCalendar
        aria-label="Responsive range calendar"
        visibleDuration={{ months: 2 }}
      >
        <RangeCalendarHeader>
          <RangeNavButton slot="previous" />
          <RangeCalendarHeading />
          <RangeNavButton slot="next" />
        </RangeCalendarHeader>

        <div className="flex w-full flex-col gap-4 md:flex-row md:items-start md:gap-0">
          <RangeCalendarGrid className="min-w-0 flex-1">
            <RangeCalendarGridHeader />
            <RangeCalendarGridBody>
              {date => <RangeCalendarCell date={date} />}
            </RangeCalendarGridBody>
          </RangeCalendarGrid>

          <div aria-hidden="true" className="hidden md:block md:w-10 lg:w-12" />

          <RangeCalendarGrid offset={{ months: 1 }} className="min-w-0 flex-1">
            <RangeCalendarGridHeader />
            <RangeCalendarGridBody>
              {date => <RangeCalendarCell date={date} />}
            </RangeCalendarGridBody>
          </RangeCalendarGrid>
        </div>
      </RangeCalendar>
    </div>
  );
}
