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
import { Input } from "@/registry/core/input";
import { Label } from "@/registry/core/label";

export default function DialogWithoutClosePreview() {
  return (
    <Dialog>
      <DialogTrigger className={buttonStyles({ appearance: "outline" })}>
        Share
      </DialogTrigger>

      <DialogOverlay isDismissable>
        <DialogContent showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>

          <DialogBody>
            <div className="grid flex-1 gap-2">
              <Label htmlFor="share-link" className="sr-only">
                Link
              </Label>
              <Input
                id="share-link"
                defaultValue="https://tailgrids.com/docs/components/dialog"
                readOnly
              />
            </div>
          </DialogBody>

          <DialogFooter className="sm:justify-start">
            <DialogClose
              className={buttonStyles({ appearance: "outline", size: "sm" })}
            >
              Close
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
