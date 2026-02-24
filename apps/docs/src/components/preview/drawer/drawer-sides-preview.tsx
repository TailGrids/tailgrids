"use client";

import { buttonStyles } from "@/registry/core/button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/registry/core/drawer";

const SIDES = ["top", "right", "bottom", "left"] as const;

export default function DrawerSidesPreview() {
  return (
    <div className="flex flex-wrap gap-4">
      {SIDES.map(side => (
        <Drawer key={side}>
          <DrawerTrigger
            className={buttonStyles({ appearance: "outline", size: "sm" })}
          >
            {side.charAt(0).toUpperCase() + side.slice(1)}
          </DrawerTrigger>
          <DrawerContent side={side}>
            <DrawerHeader>
              <DrawerTitle>Drawer Side: {side}</DrawerTitle>
              <DrawerDescription>
                This drawer is sliding from the {side} edge of the screen.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerBody>
              <p>
                You can configure the side of the drawer by passing the{" "}
                <code>side</code> prop to <code>DrawerContent</code>. The drag
                handle and gesture axis automatically adapt.
              </p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  );
}
