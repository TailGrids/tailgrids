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
import { TextArea } from "@/registry/core/text-area";

export default function DialogCollectInputPreview() {
  return (
    <Dialog>
      <DialogTrigger className={buttonStyles()}>Edit Profile</DialogTrigger>
      <DialogOverlay isDismissable>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <DialogBody>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <Label>Name</Label>
                <Input placeholder="Enter your name" className="w-full" />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Bio</Label>
                <TextArea
                  rows={3}
                  placeholder="Tell us about yourself"
                  className="w-full"
                />
              </div>
            </form>
          </DialogBody>
          <DialogFooter>
            <DialogClose
              className={buttonStyles({ appearance: "outline", size: "sm" })}
            >
              Cancel
            </DialogClose>
            <DialogClose className={buttonStyles({ size: "sm" })}>
              Save Changes
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
