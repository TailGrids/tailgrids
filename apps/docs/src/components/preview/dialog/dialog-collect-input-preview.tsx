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
import { Input } from "@/registry/core/input";
import { Label } from "@/registry/core/label";
import { Backdrop, OverlayWrapper } from "@/registry/core/overlay";
import { TextArea } from "@/registry/core/text-area";
import { TextField } from "@/registry/core/text-field";

export default function DialogCollectInputPreview() {
  return (
    <OverlayWrapper>
      <Button>Edit Profile</Button>

      <Backdrop>
        <Dialog>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>

          <DialogBody>
            <form className="flex flex-col gap-4">
              <TextField className="flex flex-col gap-1.5">
                <Label>Name</Label>
                <Input
                  placeholder="Enter your name"
                  className="w-full"
                  autoFocus
                />
              </TextField>

              <TextField className="flex flex-col gap-1.5">
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full"
                />
              </TextField>

              <TextField className="flex flex-col gap-1.5">
                <Label>Bio</Label>
                <TextArea
                  rows={3}
                  placeholder="Tell us about yourself"
                  className="w-full"
                />
              </TextField>
            </form>
          </DialogBody>

          <DialogFooter>
            <DialogClose appearance="outline">Cancel</DialogClose>
            <DialogClose>Save Changes</DialogClose>
          </DialogFooter>
        </Dialog>
      </Backdrop>
    </OverlayWrapper>
  );
}
