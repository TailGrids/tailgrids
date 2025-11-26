"use client";
import { Toast, AvatarToast } from "@/registry/core/toast";

export default function ToastPreview() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-lg">
      <Toast variant="success" description="Your profile has been updated." />

      <Toast
        title="Payment Error"
        description="Your transaction could not be completed."
        variant="error"
        actions={{
          primary: { label: "Retry" },
          dismiss: { label: "Cancel" }
        }}
      />

      <Toast
        variant="warning"
        description="Item moved to trash."
        undoAction={() => {}}
      />

      <AvatarToast
        name="Emily Stone"
        description="Sent you a message"
        status="online"
        time="Just now"
      />
    </div>
  );
}
