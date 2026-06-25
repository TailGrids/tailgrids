"use client";

import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIndicator,
  AlertTitle
} from "@/registry/core/alert";

export default function AlertVariantsPreview() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Alert>
        <AlertIndicator />
        <AlertContent>
          <AlertTitle>Default</AlertTitle>
          <AlertDescription>
            This is a default alert. It provides general information to the
            user.
          </AlertDescription>
        </AlertContent>
      </Alert>

      <Alert status="success">
        <AlertIndicator />
        <AlertContent>
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Your changes have been saved successfully.
          </AlertDescription>
        </AlertContent>
      </Alert>

      <Alert status="warning">
        <AlertIndicator />
        <AlertContent>
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            Your subscription will expire in 3 days. Please renew to continue.
          </AlertDescription>
        </AlertContent>
      </Alert>

      <Alert status="error">
        <AlertIndicator />
        <AlertContent>
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            There was a problem processing your request. Please try again.
          </AlertDescription>
        </AlertContent>
      </Alert>

      <Alert status="info">
        <AlertIndicator />
        <AlertContent>
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>
            A new software update is available. See what&apos;s new.
          </AlertDescription>
        </AlertContent>
      </Alert>
    </div>
  );
}
