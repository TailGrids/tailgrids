"use client";
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
      title="Payment Error"
      description="Your transaction could not be completed."
      variant="error"
      actions={{
        primary: { label: "Retry", onClick: () => console.log("Retry") },
        dismiss: { label: "Cancel", onClick: () => setShow(false) }
      }}
    />
  );
}
