"use client";

import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIndicator,
  AlertTitle
} from "@/registry/core/alert";
import { Xmark2x } from "@tailgrids/icons";

export default function AlertBasicPreview() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Alert>
        <AlertIndicator />
        <AlertContent>
          <AlertTitle>You have 3 unread messages</AlertTitle>
          <AlertDescription>
            Sarah, Mike, and the Design team replied to your threads from
            earlier today.
          </AlertDescription>
        </AlertContent>
      </Alert>

      <Alert status="success">
        <AlertContent>
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Your changes have been saved successfully.
          </AlertDescription>
        </AlertContent>
      </Alert>

      <Alert status="info">
        <AlertContent className="flex-row justify-between">
          <AlertTitle>Your account settings have been updated.</AlertTitle>

          <button>
            <Xmark2x className="h-lh" />
          </button>
        </AlertContent>
      </Alert>
    </div>
  );
}
