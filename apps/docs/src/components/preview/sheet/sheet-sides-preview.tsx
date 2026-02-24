"use client";

import { buttonStyles } from "@/registry/core/button";
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger
} from "@/registry/core/sheet";

const SIDES = ["top", "right", "bottom", "left"] as const;

export default function SheetSidesPreview() {
  return (
    <div className="flex flex-wrap gap-4">
      {SIDES.map(side => (
        <Sheet key={side}>
          <SheetTrigger
            className={buttonStyles({ appearance: "outline", size: "sm" })}
          >
            {side.charAt(0).toUpperCase() + side.slice(1)}
          </SheetTrigger>
          <SheetOverlay>
            <SheetContent side={side}>
              <SheetHeader>
                <SheetTitle>Sheet Side: {side}</SheetTitle>
                <SheetDescription>
                  This sheet is sliding from the {side} edge of the screen.
                </SheetDescription>
              </SheetHeader>
              <SheetBody>
                <p>
                  You can configure the side of the sheet by passing the{" "}
                  <code>side</code> prop to <code>SheetContent</code>.
                </p>
              </SheetBody>
            </SheetContent>
          </SheetOverlay>
        </Sheet>
      ))}
    </div>
  );
}
