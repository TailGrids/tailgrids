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

export default function DialogMultipleActionsPreview() {
  return (
    <Dialog>
      <DialogTrigger className={buttonStyles({ size: "sm" })}>
        Share Document
      </DialogTrigger>
      <DialogOverlay isDismissable>
        <DialogContent>
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
                className="flex items-center gap-3 rounded-lg border border-base-100 p-3 text-left transition hover:bg-background-soft-50"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                    <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                  </svg>
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
                className="flex items-center gap-3 rounded-lg border border-base-100 p-3 text-left transition hover:bg-background-soft-50"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-success-500/10 text-success-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
                    <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
                  </svg>
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
                className="flex items-center gap-3 rounded-lg border border-base-100 p-3 text-left transition hover:bg-background-soft-50"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-warning-500/10 text-warning-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path d="M10 1a6 6 0 0 0-3.815 10.631C7.237 12.5 8 13.443 8 14.456v.644a.75.75 0 0 0 .75.75h2.5a.75.75 0 0 0 .75-.75v-.644c0-1.013.762-1.957 1.815-2.825A6 6 0 0 0 10 1ZM8.863 17.414a.75.75 0 0 0-.226 1.483 9.066 9.066 0 0 0 2.726 0 .75.75 0 0 0-.226-1.483 7.563 7.563 0 0 1-2.274 0Z" />
                  </svg>
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
