"use client";

import { Button, buttonStyles } from "@/registry/core/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/registry/core/dialog";
import { CheckCircle1 } from "@tailgrids/icons";

export default function DialogWithoutOverlayPreview() {
  return (
    <Dialog>
      <DialogTrigger className={buttonStyles()}>Complete Order</DialogTrigger>

      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-success-500/10 text-success-500">
              <CheckCircle1 size={28} />
            </span>
            <DialogTitle>Order Confirmed!</DialogTitle>
            <DialogDescription>
              Your order has been placed successfully. You will receive a
              confirmation email shortly with your order details and tracking
              information.
            </DialogDescription>
          </div>
        </DialogHeader>

        <DialogBody>
          <div className="rounded-lg border border-base-100 bg-background-soft-50 p-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-text-100">Order Number</span>
              <span className="font-medium text-title-50">#ORD-20260223</span>
            </div>
            <div className="my-2 border-t border-dashed border-base-100" />
            <div className="flex items-center justify-between text-sm">
              <span className="text-text-100">Estimated Delivery</span>
              <span className="font-medium text-title-50">Feb 28, 2026</span>
            </div>
          </div>
        </DialogBody>

        <DialogFooter className="pt-4">
          <DialogClose>
            <Button variant="primary" appearance="outline" size="sm">
              View Order
            </Button>
          </DialogClose>
          <DialogClose>
            <Button size="sm">Continue Shopping</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
