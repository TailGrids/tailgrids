"use client";

import { buttonStyles } from "@/registry/core/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger
} from "@/registry/core/dialog";
import { InfoCircle } from "@tailgrids/icons";

export default function DialogShowInformationPreview() {
  return (
    <Dialog>
      <DialogTrigger className={buttonStyles()}>Show Information</DialogTrigger>
      <DialogOverlay isDismissable>
        <DialogContent>
          <DialogHeader>
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary-50 text-primary-500">
                <InfoCircle />
              </span>
              <DialogTitle>Update Available</DialogTitle>
            </div>
            <DialogDescription>
              A new version of the application is available. Please update to
              enjoy the latest features and improvements.
            </DialogDescription>
          </DialogHeader>
          <DialogBody>
            <div className="rounded-lg bg-background-soft-50 p-4">
              <h4 className="mb-2 text-sm font-medium text-title-50">
                What&apos;s new in v2.4.0
              </h4>
              <ul className="list-inside list-disc space-y-1 text-sm text-text-100">
                <li>Improved performance and stability</li>
                <li>New dashboard layout</li>
                <li>Enhanced security features</li>
                <li>Bug fixes and minor improvements</li>
              </ul>
            </div>
          </DialogBody>
          <DialogFooter>
            <DialogClose
              className={buttonStyles({ appearance: "outline", size: "sm" })}
            >
              Remind Me Later
            </DialogClose>
            <DialogClose className={buttonStyles({ size: "sm" })}>
              Update Now
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
