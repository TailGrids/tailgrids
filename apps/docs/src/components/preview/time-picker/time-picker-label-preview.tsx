"use client";

import { TimePicker, TimePickerTrigger } from "@/registry/core/time-picker";
import { useState } from "react";
import { Label } from "react-aria-components";

export default function TimePickerLabelPreview() {
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  return (
    <div className="flex flex-col gap-2 w-full max-w-lg mx-auto">
      <Label className="text-sm font-medium text-text-50">
        Select Meeting Time
      </Label>
      <TimePicker onSelect={date => setSelectedTime(date)}>
        <TimePickerTrigger className="px-4 py-2 border border-(--border-color-base-100) rounded-lg text-left min-w-37.5">
          {selectedTime
            ? selectedTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
              })
            : "Pick a time"}
        </TimePickerTrigger>
      </TimePicker>
      <p className="text-sm text-text-100">
        Selected:{" "}
        {selectedTime
          ? selectedTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit"
            })
          : "No time selected"}
      </p>
    </div>
  );
}
