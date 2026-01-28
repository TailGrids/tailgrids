"use client";

import { DatePicker } from "@/registry/core/date-picker/single-date";

export default function DatePickerPreselectedPreview() {
  return (
    <div className="flex flex-col items-center gap-4 w-full p-4">
      <div className="max-w-xs w-full">
        <DatePicker
          value={new Date(2025, 1, 15)} // Feb 15, 2025
          onChange={() => {}}
          placeholder="Fixed Date"
        />
        <p className="mt-4 text-sm text-neutral-600">(With default value)</p>
      </div>
    </div>
  );
}
