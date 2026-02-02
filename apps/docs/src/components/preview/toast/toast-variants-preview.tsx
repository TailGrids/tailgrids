"use client";
import { Toast } from "@/registry/core/toast";

export default function ToastVariantsPreview() {
  return (
    <div className="flex flex-col gap-4">
      <Toast variant="success" description="Operation completed." />
      <Toast variant="error" description="Something went wrong." />
      <Toast variant="warning" description="Check your input again." />
      <Toast variant="info" description="New update available." />
      <Toast variant="message" description="1 new message." />
    </div>
  );
}
