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

export default function DialogStickyFooterPreview() {
  return (
    <Dialog>
      <DialogTrigger className={buttonStyles({ variant: "primary" })}>
        Sticky Footer
      </DialogTrigger>
      <DialogOverlay isDismissable>
        <DialogContent>
          <DialogHeader className="pb-4 border-b">
            <DialogTitle>Terms of Service</DialogTitle>
            <DialogDescription>
              Please read through the terms of service before accepting.
            </DialogDescription>
          </DialogHeader>

          <DialogBody>
            <div className="-mx-6 max-h-[50vh] overflow-y-auto px-6 text-sm leading-relaxed text-text-100">
              <h4 className="mb-3 text-base font-medium text-title-50">
                1. Introduction
              </h4>
              <p className="mb-4">
                Welcome to our platform. By accessing or using our services, you
                agree to be bound by these terms and conditions. Please read
                them carefully before proceeding. These terms govern your use of
                our website, products, and services.
              </p>
              <h4 className="mb-3 text-base font-medium text-title-50">
                2. User Accounts
              </h4>
              <p className="mb-4">
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account. You agree to notify us immediately of any unauthorized
                use of your account or any other breach of security.
              </p>
              <h4 className="mb-3 text-base font-medium text-title-50">
                3. Privacy Policy
              </h4>
              <p className="mb-4">
                Our privacy policy describes how we handle the information you
                provide to us when you use our services. You understand that
                through your use of our services you consent to the collection
                and use of this information.
              </p>
              <h4 className="mb-3 text-base font-medium text-title-50">
                4. Intellectual Property
              </h4>
              <p className="mb-4">
                All content, features, and functionality of our services are
                owned by us, our licensors, or other providers of such material
                and are protected by copyright, trademark, patent, trade secret,
                and other intellectual property laws.
              </p>
              <h4 className="mb-3 text-base font-medium text-title-50">
                5. Limitation of Liability
              </h4>
              <p className="mb-4">
                In no event will we be liable for any indirect, incidental,
                special, consequential, or punitive damages resulting from your
                access to or use of, or inability to access or use, our
                services. This limitation applies regardless of the legal theory
                on which the claim is based.
              </p>
              <h4 className="mb-3 text-base font-medium text-title-50">
                6. Termination
              </h4>
              <p>
                We reserve the right to terminate or suspend your account and
                access to our services at our sole discretion, without notice or
                liability, for any reason, including but not limited to a breach
                of these terms. Upon termination, your right to use our services
                will immediately cease.
              </p>
            </div>
          </DialogBody>

          <DialogFooter className="border-t border-base-100 pt-4">
            <DialogClose
              className={buttonStyles({ appearance: "outline", size: "sm" })}
            >
              Decline
            </DialogClose>
            <DialogClose className={buttonStyles({ size: "sm" })}>
              Accept
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
