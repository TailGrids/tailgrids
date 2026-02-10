"use client";

import Alert from "@/registry/core/alert";
import { InfoTriangle } from "@tailgrids/icons";

export default function AlertNoTitlePreview() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Alert
        variant="info"
        message="A new software update is available. See what's new."
        icon={<InfoTriangle />}
      />
    </div>
  );
}
