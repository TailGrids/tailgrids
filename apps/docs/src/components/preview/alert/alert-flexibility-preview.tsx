"use client";

import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIndicator,
  AlertTitle
} from "@/registry/core/alert";
import { Button } from "@/registry/core/button";
import { RefreshCircle3Clockwise, Xmark2x } from "@tailgrids/icons";

export default function AlertFlexibilityPreview() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Alert status="info">
        <AlertIndicator>
          <RefreshCircle3Clockwise className="animate-spin [animation-duration:0.67s]" />
        </AlertIndicator>
        <AlertContent className="flex-row justify-between">
          <AlertTitle>Your account settings have been updated.</AlertTitle>

          <button type="button" aria-label="Dismiss">
            <Xmark2x className="h-lh" />
          </button>
        </AlertContent>
      </Alert>

      <Alert status="success">
        <AlertIndicator />
        <AlertContent>
          <AlertTitle>Scheduled maintenance</AlertTitle>
          <AlertDescription>
            The dashboard will be under maintenance on Sunday, June 28 from
            02:00 to 04:00 UTC.
          </AlertDescription>

          <Button size="xs" variant="success" className="mt-2">
            View status page
          </Button>
        </AlertContent>
      </Alert>

      <Alert status="warning">
        <AlertIndicator />
        <AlertContent>
          <AlertTitle>Storage almost full</AlertTitle>
          <AlertDescription>
            You&apos;ve used 95% of your available storage.{" "}
            <a className="font-medium underline" href="#">
              Upgrade your plan
            </a>{" "}
            to keep uploading files without interruption.
          </AlertDescription>
        </AlertContent>
      </Alert>

      <Alert status="error">
        <AlertIndicator />
        <AlertContent>
          <AlertTitle>There were 2 problems with your submission</AlertTitle>
          <AlertDescription>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Email address is required</li>
              <li>Password must be at least 8 characters</li>
            </ul>
          </AlertDescription>
        </AlertContent>
      </Alert>
    </div>
  );
}
