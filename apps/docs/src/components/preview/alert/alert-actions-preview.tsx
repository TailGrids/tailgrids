"use client";

import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIndicator,
  AlertTitle
} from "@/registry/core/alert";
import { Button } from "@/registry/core/button";
export default function AlertActionsPreview() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Alert status="error">
        <AlertIndicator />
        <AlertContent>
          <AlertTitle>Delete Account</AlertTitle>
          <AlertDescription>
            Your changes have been saved successfully.
          </AlertDescription>

          <div className="flex items-center gap-2 mt-2">
            <Button appearance="outline" size="xs">
              Cancel
            </Button>
            <Button variant="danger" size="xs">
              Delete
            </Button>
          </div>
        </AlertContent>
      </Alert>
    </div>
  );
}
