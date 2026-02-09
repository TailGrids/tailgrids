"use client";
import { Button } from "@/registry/core/button";
import { Toast } from "@/registry/core/toast";

export default function ToastWithTitlePreview() {
  return (
    <Toast
      message={{
        title: "Payment Error",
        description: "Your transaction could not be completed."
      }}
      variant="error"
    >
      <div className="mt-5 flex gap-3">
        <Button size="sm" className="py-2">
          Retry
        </Button>

        <Button size="sm" appearance="outline" className="py-2">
          Cancel
        </Button>
      </div>
    </Toast>
  );
}
