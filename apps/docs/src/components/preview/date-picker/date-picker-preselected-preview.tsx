"use client";

import { DatePicker } from "@/registry/core/date-picker/single-date";

export default function DatePickerPreselectedPreview() {
  return (
    <div className="w-md mx-auto">
      <DatePicker
        value={new Date(2025, 1, 15)} // Feb 15, 2025
        onChange={() => {}}
        placeholder="Fixed Date"
      />
      <p className="mt-4 text-sm text-title-50">(With default value)</p>
    </div>
  );
}
