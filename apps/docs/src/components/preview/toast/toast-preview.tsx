"use client";
import { Toast } from "@/registry/core/toast";
import { useEffect, useState } from "react";

export default function ToastPreview() {
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
      variant="success"
      description="Your profile has been updated."
      actions={{
        dismiss: {
          label: "Dismiss",
          onClick: () => setShow(false)
        }
      }}
    />
  );
}
