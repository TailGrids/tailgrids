"use client";

import Alert from "@/registry/core/alert";
import {
  CheckCircle1,
  InfoCircle,
  InfoTriangle,
  Xmark2x
} from "@tailgrids/icons";

export default function AlertVariantsPreview() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Alert
        variant="success"
        title="Success"
        message="Your changes have been saved successfully."
        icon={<CheckCircle1 />}
      />

      <Alert
        variant="danger"
        title="Error"
        message="There was a problem processing your request. Please try again."
        icon={<Xmark2x />}
      />

      <Alert
        variant="warning"
        title="Warning"
        message="Your subscription will expire in 3 days. Please renew to continue."
        icon={<InfoTriangle />}
      />

      <Alert
        variant="info"
        title="Information"
        message="A new software update is available. See what's new."
        icon={<InfoCircle />}
      />

      <Alert
        variant="gray"
        title="Neutral"
        message="This is a neutral alert for general information."
        icon={<InfoCircle />}
      />
    </div>
  );
}
