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
import { Label } from "@/registry/core/label";
import { Toggle } from "@/registry/core/toggle";
import { Gear1 } from "@tailgrids/icons";

export default function DrawerSettingsPreview() {
  return (
    <Drawer>
      <DrawerTrigger className={buttonStyles({ appearance: "outline" })}>
        <Gear1 className="mr-2 size-4" />
        Quick Settings
      </DrawerTrigger>
      <DrawerContent side="bottom" className="sm:max-w-sm sm:mx-auto">
        <DrawerHeader>
          <DrawerTitle>Preferences</DrawerTitle>
          <DrawerDescription>
            Manage your notification settings.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerBody className="px-6 pb-6">
          <div className="flex flex-col gap-6 pt-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <Label className="text-base">Push Notifications</Label>
                <span className="text-sm text-text-100">
                  Receive alerts on your device.
                </span>
              </div>
              <Toggle defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <Label className="text-base">Email Digests</Label>
                <span className="text-sm text-text-100">
                  Weekly summary of activity.
                </span>
              </div>
              <Toggle />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <Label className="text-base">Marketing Emails</Label>
                <span className="text-sm text-text-100">
                  Promotions and offers.
                </span>
              </div>
              <Toggle />
            </div>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
