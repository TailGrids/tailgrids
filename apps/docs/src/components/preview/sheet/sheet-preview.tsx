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

export default function SheetPreview() {
  return (
    <Sheet>
      <SheetTrigger className={buttonStyles()}>Open Sheet</SheetTrigger>
      <SheetOverlay>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>
              Sheets are side panels that slide from the edge of the screen.
            </SheetDescription>
          </SheetHeader>
          <SheetBody>
            <p>
              This is a basic sheet component. It's built on top of React Aria
              Modal and Dialog components, providing a highly accessible and
              customizable way to display extra content without losing the page
              context.
            </p>
          </SheetBody>
          <SheetFooter showCloseButton />
        </SheetContent>
      </SheetOverlay>
    </Sheet>
  );
}
