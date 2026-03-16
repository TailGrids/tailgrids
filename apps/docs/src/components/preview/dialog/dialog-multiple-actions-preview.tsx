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
import {
  Envelope1,
  FileTextMultiple,
  Link1AngularRight
} from "@tailgrids/icons";

export default function DialogMultipleActionsPreview() {
  return (
    <Dialog>
      <DialogTrigger className={buttonStyles({ size: "sm" })}>
        Share Document
      </DialogTrigger>
      <DialogOverlay>
        <DialogContent className="w-md">
          <DialogHeader>
            <DialogTitle>Share This Document</DialogTitle>
            <DialogDescription>
              Choose how you want to share this document with others.
            </DialogDescription>
          </DialogHeader>
          <DialogBody>
            <div className="flex flex-col gap-3">
              <button
                type="button"
                className="flex items-center gap-3 rounded-lg border border-fd-border p-3 text-left transition hover:bg-background-soft-50"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-500">
                  <Envelope1 />
                </span>
                <div>
                  <p className="text-sm font-medium text-title-50">
                    Share via Email
                  </p>
                  <p className="text-xs text-text-100">
                    Send a link directly to their inbox
                  </p>
                </div>
              </button>

              <button
                type="button"
                className="flex items-center gap-3 rounded-lg border border-fd-border p-3 text-left transition hover:bg-background-soft-50"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-success-500/10 text-success-500">
                  <Link1AngularRight />
                </span>
                <div>
                  <p className="text-sm font-medium text-title-50">Copy Link</p>
                  <p className="text-xs text-text-100">
                    Copy a shareable link to your clipboard
                  </p>
                </div>
              </button>

              <button
                type="button"
                className="flex items-center gap-3 rounded-lg border border-fd-border p-3 text-left transition hover:bg-background-soft-50"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-warning-500/10 text-warning-500">
                  <FileTextMultiple />
                </span>
                <div>
                  <p className="text-sm font-medium text-title-50">
                    Embed Document
                  </p>
                  <p className="text-xs text-text-100">
                    Get an embed code for websites or apps
                  </p>
                </div>
              </button>
            </div>
          </DialogBody>
          <DialogFooter>
            <DialogClose
              className={buttonStyles({ appearance: "outline", size: "sm" })}
            >
              Cancel
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
