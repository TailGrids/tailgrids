"use client";

import { useState } from "react";
import OtpInput from "@/registry/core/otp-input";

export default function OtpInputPreview() {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col items-start gap-8 w-full">
      <OtpInput
        label="4-Digit Code"
        hint="Try typing or pasting a 4-digit number."
      />

      <OtpInput
        label="6-Digit Verification Code"
        digitLength={6}
        hint="A divider appears automatically after the first 3 digits."
      />

      <OtpInput
        label="Controlled Value"
        value={value}
        onChange={e => setValue(e.target.value)}
        hint={`Current value: ${value || "—"}`}
      />

      <OtpInput label="Disabled Input" disabled />
    </div>
  );
}
