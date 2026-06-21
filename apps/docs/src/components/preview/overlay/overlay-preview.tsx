"use client";

import { Button } from "@/registry/core/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/registry/core/dialog";
import { Backdrop, OverlayWrapper } from "@/registry/core/overlay";

export default function DialogPreview() {
  return (
    <OverlayWrapper>
      <Button>Open Dialog</Button>

      <Backdrop>
        <Dialog className="w-sm">
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
            <DialogClose autoFocus appearance="outline">
              Cancel
            </DialogClose>
            <Button>Confirm</Button>
          </DialogFooter>
        </Dialog>
      </Backdrop>
    </OverlayWrapper>
  );
}
