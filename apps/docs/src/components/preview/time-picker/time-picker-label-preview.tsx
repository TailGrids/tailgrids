"use client";

import { buttonStyles } from "@/registry/core/button";
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

      <TimePicker onSelect={setSelectedTime}>
        <TimePickerTrigger
          className={buttonStyles({
            appearance: "outline",
            className: "min-w-37.5 justify-start"
          })}
        >
          {selectedTime ? formatTime(selectedTime) : "Pick a time"}
        </TimePickerTrigger>
      </TimePicker>

      <p className="text-sm text-text-100">
        Selected: {selectedTime ? formatTime(selectedTime) : "No time selected"}
      </p>
    </div>
  );
}

function formatTime(time: Date) {
  return time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
}
