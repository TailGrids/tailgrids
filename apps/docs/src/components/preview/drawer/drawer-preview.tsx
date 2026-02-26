"use client";

import { buttonStyles } from "@/registry/core/button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/registry/core/drawer";

export default function DrawerPreview() {
  return (
    <Drawer>
      <DrawerTrigger className={buttonStyles()}>Open Drawer</DrawerTrigger>
      <DrawerContent side="bottom">
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>
            Drawers are gesture-driven panels that slide from the edge of the
            screen.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          <p>
            This is a basic drawer component. It's built on top of React Aria
            Modal and Dialog components, providing a highly accessible and
            customizable way to display extra content. You can drag it down to
            close it.
          </p>
        </DrawerBody>
        <DrawerFooter showCloseButton />
      </DrawerContent>
    </Drawer>
  );
}
