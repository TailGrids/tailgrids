"use client";

import { AlertDialog } from "@/registry/core/alert-dialog";
import { Button } from "@/registry/core/button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/registry/core/dialog";
import { useState } from "react";

export default function AlertDialogControlledPreview() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-100 w-full items-center justify-center p-10 dark:bg-black/20">
      <Button onClick={() => setIsOpen(true)}>Open</Button>

      <AlertDialog isOpen={isOpen} onOpenChange={setIsOpen}>
        <DialogHeader>
          <DialogTitle>Unlock Pro Insights</DialogTitle>
          <DialogDescription>
            Join 10,000+ businesses using our Pro tools to scale.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={() => setIsOpen(false)}>Proceed</Button>
        </DialogFooter>
      </AlertDialog>
    </div>
  );
}
