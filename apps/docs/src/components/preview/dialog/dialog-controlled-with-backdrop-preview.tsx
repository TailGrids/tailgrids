"use client";

import { Button } from "@/registry/core/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/registry/core/dialog";
import { Backdrop } from "@/registry/core/overlay";
import { useState } from "react";

export default function DialogControlledWithBackdropPreview() {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div>
      <Button variant="danger" onClick={() => setShowModal(true)}>
        Delete Account
      </Button>

      <Backdrop isOpen={showModal} onOpenChange={setShowModal}>
        <Dialog>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove all of your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-2">
            <DialogClose autoFocus appearance="outline" size="sm">
              Cancel
            </DialogClose>
            <Button variant="danger" size="sm">
              Yes, Delete Account
            </Button>
          </DialogFooter>
        </Dialog>
      </Backdrop>
    </div>
  );
}
