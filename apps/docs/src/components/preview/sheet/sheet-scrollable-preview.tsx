"use client";

import { buttonStyles } from "@/registry/core/button";
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger
} from "@/registry/core/sheet";

export default function SheetScrollablePreview() {
  const SKELETON_ITEMS = Array.from({ length: 20 });

  return (
    <Sheet>
      <SheetTrigger
        className={buttonStyles({ size: "sm", appearance: "outline" })}
      >
        Open Terms of Service
      </SheetTrigger>
      <SheetOverlay>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Terms of Service</SheetTitle>
            <SheetDescription>
              Please read our terms of service carefully before using our
              platform.
            </SheetDescription>
          </SheetHeader>

          <SheetBody className="pt-2 pr-1">
            <div className="flex flex-col gap-6">
              {SKELETON_ITEMS.map((_, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <h4 className="text-sm font-semibold text-title-50">
                    Section {i + 1}
                  </h4>
                  <p className="text-sm text-text-100">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              ))}
            </div>
          </SheetBody>

          <SheetFooter showCloseButton />
        </SheetContent>
      </SheetOverlay>
    </Sheet>
  );
}
