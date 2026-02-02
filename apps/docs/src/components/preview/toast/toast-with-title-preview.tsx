"use client";
import { Toast } from "@/registry/core/toast";

export default function ToastWithTitlePreview() {
  return (
    <Toast
      title="Payment Error"
      description="Your transaction could not be completed."
      variant="error"
      actions={{
        primary: { label: "Retry", onClick: () => console.log("Retry") },
        dismiss: { label: "Cancel", onClick: () => console.log("Cancel") }
      }}
    />
  );
}
