"use client";

import { TimePicker, TimePickerTrigger } from "@/registry/core/time-picker";
import { ClockThree } from "@tailgrids/icons";
import { useState } from "react";

export default function TimePickerCustomTriggerPreview() {
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  return (
    <TimePicker onSelect={setSelectedTime}>
      <TimePickerTrigger className="flex items-center gap-2 px-4 py-2 bg-button-primary-background text-white-100 rounded-full hover:bg-button-primary-hover-background transition outline-none focus:ring-2 focus:ring-button-primary-focus-ring focus:ring-offset-2">
        <ClockThree className="size-4" />

        <span className="font-medium">
          {selectedTime ? formatTime(selectedTime) : "Schedule Now"}
        </span>
      </TimePickerTrigger>
    </TimePicker>
  );
}

function formatTime(time: Date) {
  return time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
}
