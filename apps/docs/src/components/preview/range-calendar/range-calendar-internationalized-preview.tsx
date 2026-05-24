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
import { I18nProvider } from "react-aria-components";

export default function RangeCalendarInternationalizedPreview() {
  return (
    <div className="flex justify-center p-6">
      <I18nProvider locale="ar-SA-u-ca-islamic-civil-nu-arab">
        <RangeCalendar aria-label="التقويم الإسلامي المدني">
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
      </I18nProvider>
    </div>
  );
}
