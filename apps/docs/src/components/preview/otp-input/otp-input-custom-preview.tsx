"use client";

import OtpInput from "@/registry/core/otp-input";

export default function OtpInputCustomPreview() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="p-6 border border-tg-border-1 rounded-xl bg-background-soft-100 dark:bg-background-soft-500 dark:border-tg-border-1">
        <h3 className="mb-4 text-center text-sm font-semibold text-title-50 dark:text-title-50">
          Secure Login
        </h3>
        <OtpInput
          className="[&>input]:border-primary-200 [&>input]:focus:border-primary-500 [&>input]:bg-white-100 dark:[&>input]:bg-foreground-soft-300"
          digitLength={4}
          hint="Enter the code sent to your device"
        />
      </div>
    </div>
  );
}
