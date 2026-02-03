"use client";
import { Toast } from "@/registry/core/toast";
import { useEffect, useState } from "react";

function ToastItem({
  variant,
  description
}: {
  variant: "success" | "error" | "warning" | "info" | "message";
  description: string;
}) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!show) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!show)
    return (
      <div className="flex h-15 items-center justify-center rounded-lg border border-dashed border-neutral-200 text-sm text-neutral-400">
        Toast will reappear in 2s...
      </div>
    );

  return (
    <Toast
      variant={variant}
      description={description}
      actions={{
        dismiss: {
          label: "Dismiss",
          onClick: () => setShow(false)
        }
      }}
    />
  );
}

export default function ToastVariantsPreview() {
  const toasts = [
    { variant: "success" as const, description: "Operation completed." },
    { variant: "error" as const, description: "Something went wrong." },
    { variant: "warning" as const, description: "Check your input again." },
    { variant: "info" as const, description: "New update available." },
    { variant: "message" as const, description: "1 new message." }
  ];

  return (
    <div className="flex flex-col gap-4">
      {toasts.map(toast => (
        <ToastItem
          key={toast.variant}
          variant={toast.variant}
          description={toast.description}
        />
      ))}
    </div>
  );
}
