"use client";

import { TimePicker, TimePickerTrigger } from "@/registry/core/time-picker";
import { useState } from "react";

export default function TimePickerPreview() {
  const [selectedTime, setSelectedTime] = useState<Date>();

  return (
    <div className="w-full max-w-lg mx-auto">
      <TimePicker onSelect={date => setSelectedTime(date)}>
        <TimePickerTrigger className="px-4 py-2 border border-(--border-color-base-100) rounded-lg">
          Select Time {selectedTime && `: ${selectedTime.toLocaleTimeString()}`}
        </TimePickerTrigger>
      </TimePicker>
    </div>
  );
}
