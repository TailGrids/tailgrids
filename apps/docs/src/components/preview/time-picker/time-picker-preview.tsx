"use client";

import { TimePicker, TimePickerTrigger } from "@/registry/core/time-picker";
import { useState } from "react";

export default function TimePickerPreview() {
  const [selectedTime, setSelectedTime] = useState<Date>();

  return (
    <TimePicker onSelect={date => setSelectedTime(date)}>
      <TimePickerTrigger className="px-4 py-2 border rounded-lg">
        Select Time {selectedTime && `: ${selectedTime.toLocaleTimeString()}`}
      </TimePickerTrigger>
    </TimePicker>
  );
}
