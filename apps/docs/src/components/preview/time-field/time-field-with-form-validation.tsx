"use client";

import {
  TimeField,
  TimeFieldError,
  TimeFieldInput,
  TimeFieldLabel
} from "@/registry/core/time-field";

export default function TimeFieldWithFormValidation() {
  return (
    <div>
      <form>
        <TimeField
          name="meeting_time"
          label="Meeting"
          required
          validationBehavior="native"
          validate={v => {
            if (v && v.hour < 8) return "Too early!";
            return null;
          }}
        >
          <TimeFieldLabel />
          <TimeFieldInput />
          <TimeFieldError />
        </TimeField>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
