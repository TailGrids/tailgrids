"use client";
import { Button } from "@/registry/core/button";
import { Toast } from "@/registry/core/toast";
import { useEffect, useState } from "react";

export default function ToastWithTitlePreview() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!show) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!show) return null;

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
