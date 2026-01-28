"use client";

import { DatePicker } from "@/registry/core/date-picker/single-date";
import { useState } from "react";

export default function DatePickerDefaultPreview() {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div className="flex flex-col items-center gap-4 w-full p-4">
      <div className="max-w-xs w-full">
        <DatePicker value={date} onChange={setDate} placeholder="Pick a date" />
        <p className="mt-4 text-sm text-neutral-600">
          Selected: {date ? date.toDateString() : "None"}
        </p>
      </div>
    </div>
  );
}
