"use client";

import Alert from "@/registry/core/alert";

export function AlertPreview() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Alert
        variant="success"
        title="Success"
        message="Your changes have been saved successfully."
        withIcon
      />

      <Alert
        variant="info"
        message="A new software update is available. See what's new."
        withIcon
      />

      <Alert
        variant="warning"
        title="Warning"
        message="Your subscription will expire in 3 days. Please renew to continue."
        withIcon
      />

      <Alert
        variant="danger"
        title="Error"
        message="There was a problem processing your request. Please try again."
        withIcon
        actions={{
          primary: {
            label: "Retry",
            onClick: () => console.log("Retrying...")
          },
          secondary: {
            label: "Cancel"
          }
        }}
      />
    </div>
  );
}
