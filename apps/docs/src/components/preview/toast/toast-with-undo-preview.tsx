"use client";
import { Toast } from "@/registry/core/toast";

export default function ToastWithUndoPreview() {
  return (
    <Toast
      variant="warning"
      message="Item moved to trash."
      undoAction={() => console.log("Undo")}
      hideIcon
    />
  );
}
