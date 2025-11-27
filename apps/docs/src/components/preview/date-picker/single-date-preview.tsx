"use client";

import { DatePicker } from "@/registry/core/date-picker/single-date";
import { useState } from "react";

export default function SingleDatePreview() {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div className="flex flex-col items-center gap-8 w-full p-4">
      <div className="max-w-xs w-full">
        <DatePicker value={date} onChange={setDate} placeholder="Travel Date" />
        <p className="mt-4 text-sm text-neutral-600">
          Selected: {date ? date.toDateString() : "None"}
        </p>
      </div>

      <div className="max-w-xs w-full">
        <DatePicker
          value={new Date(2025, 1, 15)} // Feb 15, 2025
          onChange={() => {}}
          placeholder="Fixed Date"
          className="max-w-xs"
        />
        <p className="mt-4 text-sm text-neutral-600">(With default value)</p>
      </div>
    </div>
  );
}
