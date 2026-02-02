"use client";
import { Toast } from "@/registry/core/toast";

export default function ToastWithUndoPreview() {
  return (
    <Toast
      variant="warning"
      description="Item moved to trash."
      undoAction={() => console.log("Undo")}
    />
  );
}
