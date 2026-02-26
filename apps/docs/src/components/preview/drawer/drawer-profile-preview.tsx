"use client";

import { Avatar } from "@/registry/core/avatar";
import { buttonStyles } from "@/registry/core/button";
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/registry/core/drawer";
import { Separator } from "@/registry/core/separator";
import { Envelope1, MapMarker5, Phone } from "@tailgrids/icons";

export default function DrawerProfilePreview() {
  return (
    <Drawer>
      <DrawerTrigger className={buttonStyles({ appearance: "outline" })}>
        View Profile
      </DrawerTrigger>
      <DrawerContent side="bottom" className="sm:max-w-md sm:mx-auto">
        <DrawerHeader className="text-center sm:text-center">
          <div className="mx-auto mb-4 flex justify-center">
            <Avatar
              src="/docs/images/avatar/avatar-2.webp"
              alt="Jane Doe"
              fallback="JD"
              size="xxl"
              status="online"
            />
          </div>
          <DrawerTitle className="text-xl">Ahmed Tusar</DrawerTitle>
          <DrawerDescription>Software Engineer</DrawerDescription>
        </DrawerHeader>
        <DrawerBody className="px-6">
          <div className="flex flex-col gap-4 py-4">
            <div className="flex items-center gap-3 text-sm text-text-100">
              <Envelope1 className="size-4 text-text-200" />
              ahmed.tusar@mail.com
            </div>
            <Separator />
            <div className="flex items-center gap-3 text-sm text-text-100">
              <Phone className="size-4 text-text-200" />
              +1 (555) 123-4567
            </div>
            <Separator />
            <div className="flex items-center gap-3 text-sm text-text-100">
              <MapMarker5 className="size-4 text-text-200" />
              Dhaka, Bangladesh
            </div>
          </div>
        </DrawerBody>
        <DrawerFooter>
          <DrawerClose className={buttonStyles({ className: "w-full" })}>
            Send Message
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
