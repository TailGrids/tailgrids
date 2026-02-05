"use client";

import Alert from "@/registry/core/alert";
import { CheckCircle1 } from "@tailgrids/icons";

export function AlertPreview() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Alert
        variant="success"
        title="Success"
        message="Your changes have been saved successfully."
        icon={<CheckCircle1 />}
      />
    </div>
  );
}
