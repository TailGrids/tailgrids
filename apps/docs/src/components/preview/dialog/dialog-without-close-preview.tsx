"use client";

import { Button, buttonStyles } from "@/registry/core/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/registry/core/dialog";
import { Input } from "@/registry/core/input";
import { Label } from "@/registry/core/label";
import { Backdrop, OverlayWrapper } from "@/registry/core/overlay";

export default function DialogWithoutClosePreview() {
  return (
    <OverlayWrapper>
      <Button className={buttonStyles({ appearance: "outline" })}>Share</Button>

      <Backdrop>
        <Dialog showCloseButton={false} className="w-sm">
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
        </Dialog>
      </Backdrop>
    </OverlayWrapper>
  );
}
