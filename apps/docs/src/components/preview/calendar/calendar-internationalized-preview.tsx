"use client";

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
import { I18nProvider } from "react-aria-components";

export default function CalendarInternationalizedPreview() {
  return (
    <div className="flex justify-center p-6">
      <I18nProvider locale="ar-SA-u-ca-islamic-civil-nu-arab">
        <Calendar aria-label="التقويم الإسلامي المدني">
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
      </I18nProvider>
    </div>
  );
}
