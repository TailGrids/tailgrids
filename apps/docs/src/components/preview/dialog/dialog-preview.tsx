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

export default function DialogPreview() {
  return (
    <Dialog>
      <DialogTrigger className={buttonStyles()}>Open Dialog</DialogTrigger>
      <DialogOverlay isDismissable>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>
              This is a basic dialog with a title, description, and a close
              button.
            </DialogDescription>
          </DialogHeader>
          <DialogBody>
            <p>
              Dialogs are used to display content in a layer above the main
              page. They can be used to show information, ask a question, or
              collect input from the user.
            </p>
          </DialogBody>
          <DialogFooter>
            <DialogClose
              className={buttonStyles({ appearance: "outline", size: "sm" })}
            >
              Cancel
            </DialogClose>
            <DialogClose className={buttonStyles({ size: "sm" })}>
              Confirm
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
