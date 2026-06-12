"use client";

import { Button } from "@/components/ui/Button";
import { Label } from "@/registry/core/label";
import { TimeField } from "@/registry/core/time-field";
import { DateInput, DateSegment } from "@/registry/core/date-field";

export default function TimeFieldWithFormValidation() {
  return (
    <div>
      <form>
        <TimeField
          name="meeting_time"
          required
          validationBehavior="native"
          validate={v => {
            if (v && v.hour < 8) return "Too early!";
            return null;
          }}
        >
          <Label>Meeting time</Label>
          <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
        </TimeField>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
