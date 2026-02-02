"use client";

import { TimePicker, TimePickerTrigger } from "@/registry/core/time-picker";
import { Clock } from "lucide-react";
import { useState } from "react";

export default function TimePickerCustomTriggerPreview() {
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  return (
    <TimePicker onSelect={date => setSelectedTime(date)}>
      <TimePickerTrigger className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        <Clock className="w-4 h-4" />
        <span className="font-medium">
          {selectedTime
            ? selectedTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
              })
            : "Schedule Now"}
        </span>
      </TimePickerTrigger>
    </TimePicker>
  );
}
