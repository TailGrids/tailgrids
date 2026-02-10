"use client";

import { RangeDatePicker } from "@/registry/core/date-picker/range-date";
import { format } from "date-fns";
import { useState } from "react";

export default function RangeDatePickerPreview() {
  const [startDate, setStartDate] = useState<Date | null>(
    new Date(2028, 7, 25)
  );
  const [endDate, setEndDate] = useState<Date | null>(new Date(2028, 8, 9));

  const handleDateChange = (start: Date | null, end: Date | null) => {
    setStartDate(start);
    setEndDate(end);
  };

  const formattedRange =
    startDate && endDate
      ? `${format(startDate, "MMM d, yyyy")} - ${format(endDate, "MMM d, yyyy")}`
      : "None selected";

  return (
    <div className="flex flex-col items-center gap-8 p-4">
      <div className="w-full">
        <RangeDatePicker
          defaultStartDate={startDate || undefined}
          defaultEndDate={endDate || undefined}
          onDateChange={handleDateChange}
        />
        <p className="mt-4 text-sm text-title-50">
          Selected Range: {formattedRange}
        </p>
      </div>
    </div>
  );
}
