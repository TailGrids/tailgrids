"use client";
import { Toast } from "@/registry/core/toast";
import { useEffect, useState } from "react";

export default function ToastWithUndoPreview() {
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
      variant="warning"
      description="Item moved to trash."
      undoAction={() => {
        console.log("Undo");
        setShow(false);
      }}
      actions={{
        dismiss: {
          label: "Dismiss",
          onClick: () => setShow(false)
        }
      }}
    />
  );
}
