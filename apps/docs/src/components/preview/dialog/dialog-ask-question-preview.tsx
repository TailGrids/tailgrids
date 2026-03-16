"use client";

import { buttonStyles } from "@/registry/core/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger
} from "@/registry/core/dialog";

export default function DialogAskQuestionPreview() {
  return (
    <Dialog>
      <DialogTrigger className={buttonStyles({ variant: "danger" })}>
        Delete Account
      </DialogTrigger>
      <DialogOverlay>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove all of your data from our servers.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="mt-2">
            <DialogClose
              className={buttonStyles({ appearance: "outline", size: "sm" })}
            >
              Cancel
            </DialogClose>
            <DialogClose
              className={buttonStyles({ variant: "danger", size: "sm" })}
            >
              Yes, Delete Account
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
