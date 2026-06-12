"use client";

import { DateField, DateInput, DateSegment } from "@/registry/core/date-field";
import { Label } from "@/registry/core/label";
import { I18nProvider } from "react-aria-components";

export default function DateFieldInternationalizationPreview() {
  return (
    <div className="max-w-2xs mx-auto">
      <I18nProvider locale="hi-IN-u-ca-indian">
        <DateField>
          <Label>Appointment date</Label>
          <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
        </DateField>
      </I18nProvider>
    </div>
  );
}
