"use client";
import { Toast } from "@/registry/core/toast";

export default function ToastVariantsPreview() {
  return (
    <div className="flex flex-col gap-4">
      <Toast variant="success" message="Operation completed." />
      <Toast variant="error" message="Something went wrong." />
      <Toast variant="warning" message="Check your input again." />
      <Toast variant="info" message="New update available." />
      <Toast variant="default" message="1 new message." />
    </div>
  );
}
